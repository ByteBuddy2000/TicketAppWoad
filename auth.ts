import NextAuth, { AuthOptions, Session, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectToDB } from "./lib/connectDB";
import { JWT } from "next-auth/jwt";
import Admin from "@/models/Admin";

// Extend the default Session user type to include id, username, role, and referralCode
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      username: string;
      role: string;
      referralCode: string;
    }
  }
}

// Define what an admin looks like after authorization
interface AuthorizedAdmin {
  id: string;
  email: string;
  username: string;
  role: string;
  referralCode: string;
}

// Define expected credentials input shape
interface Credentials {
  email: string;
  password: string;
}

// Main NextAuth configuration
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<"email" | "password", string> | undefined): Promise<AuthorizedAdmin | null> {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const { email, password } = credentials;

        await connectToDB();

        // Find admin by email
        const admin = await Admin.findOne({ email }).select("+password") as {
          _id: unknown;
          email: string;
          username: string;
          role: string;
          password: string;
          referralCode: string;
        } | null;
        if (!admin || !admin.password) {
          console.error("Admin not found or password missing");
          throw new Error("Invalid credentials");
        }

        // Compare hashed password
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
          console.error("Invalid password attempt for email:", email);
          throw new Error("Invalid credentials");
        }

        // Return admin object
        return {
          id: (admin._id as any).toString(),
          email: admin.email,
          username: admin.username,
          role: admin.role,
          referralCode: admin.referralCode,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    // Add admin data to JWT token
    async jwt({ token, user }: { token: JWT; user?: NextAuthUser | undefined; account?: any; profile?: any; isNewUser?: boolean }) {
      if (user) {
        token.id = (user as any).id ?? token.id;
        token.email = user.email ?? token.email;
        token.username = (user as any).username ?? token.username;
        token.role = (user as any).role ?? token.role;
        token.referralCode = (user as any).referralCode ?? token.referralCode;
      }
      return token;
    },

    // Add token data to session object
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      session.user = {
        id: token.id as string,
        email: token.email as string,
        username: token.username as string,
        role: token.role as string,
        referralCode: token.referralCode as string,
      };
      return session;
    },

    // Redirect admin after login based on role
    async redirect({ url, baseUrl, token }: { url: string; baseUrl: string; token?: JWT }) {
      if (token?.role === "admin") return "/admin";
      return baseUrl;
    },
  },
  pages: {
    signIn: "/sign-in",
    error: "/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);