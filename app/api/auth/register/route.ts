import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { connectToDB } from "@/lib/connectDB";
import User from "@/models/Admin";
import { generateRefCode } from "@/lib/generateRefCode"; // <-- Import here

interface RegisterBody {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  referralCode?: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const { username, email, password, confirmPassword, referralCode }: RegisterBody = await req.json();

    // Validate required fields
    if (!username || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Password match check
    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match." }, { status: 400 });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already registered." }, { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate referral code if not provided
    let finalReferralCode = referralCode;
    if (!finalReferralCode) {
      // Ensure uniqueness
      let unique = false;
      while (!unique) {
        finalReferralCode = generateRefCode();
        const exists = await User.findOne({ referralCode: finalReferralCode });
        if (!exists) unique = true;
      }
    }

    // Create the admin user
    const newUser = await User.create({
      adminID: uuidv4(), // <-- use adminID, not userID
      username,
      email,
      password: hashedPassword,
      role: "admin",
      referralCode: finalReferralCode,
    });

    return NextResponse.json({
      success: true,
      message: "Registration successful",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        referralCode: newUser.referralCode,
      },
    });
  } catch (err: any) {
    console.error("❌ Registration Error:", err.message);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}