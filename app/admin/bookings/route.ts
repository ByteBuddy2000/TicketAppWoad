import { NextRequest, NextResponse } from "next/server";
import Booking from "@/models/Bookings";
import { connectToDB } from "@/lib/connectDB";

// GET /admin/bookings?all=true
export async function GET(req: NextRequest) {
  await connectToDB();

  // Optionally, you can filter by ?all=true
  // But here, just return all bookings
  const bookings = await Booking.find({});
  return NextResponse.json(bookings);
}