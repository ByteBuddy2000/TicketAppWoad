import { NextResponse } from "next/server";
import Admin from "@/models/Admin";
import { connectToDB } from "@/lib/connectDB";

// GET /api/admin/agents
export async function GET() {
  await connectToDB();
  const admins = await Admin.find({}, "username email referralCode");
  return NextResponse.json(admins);
}