import mongoose, { Document, Model, Schema } from "mongoose";

// 1. Define TypeScript interface for Admin
export interface IAdmin extends Document {
  adminID: string;
  username: string;
  email: string;
  password: string;
  profilePicture?: string | null;
  joinDate?: Date | null;
  lastLogin?: Date | null;
  role: "admin";
  status: "active" | "inactive";
  referralCode: string; // Required and unique for all admins
  createdAt?: Date;
  updatedAt?: Date;
}

// 2. Define Mongoose Schema for Admin
const AdminSchema: Schema<IAdmin> = new Schema(
  {
    adminID: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false, // Hide by default when querying
    },
    joinDate: {
      type: Date,
      default: null,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
    role: {
      type: String,
      enum: ["admin"],
      default: "admin",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    referralCode: {
      type: String,
      unique: true,
      required: true, // Always required for admin
    },
    profilePicture: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

// 3. Export Mongoose model for Admin
const Admin: Model<IAdmin> = mongoose.models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema);
export default Admin;