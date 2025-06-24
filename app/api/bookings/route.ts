import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectDB";
import Booking from "@/models/Bookings";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();
    // ... your booking creation logic ...
    const booking = await Booking.create(data);
    return NextResponse.json(booking, { status: 201 });
  } catch (error: any) {
    // Log the error for debugging
    console.error("Booking API error:", error.message || error);

    // Return a user-friendly error message
    return NextResponse.json(
      { error: "Sorry, we could not process your booking at this time. Please try again later." },
      { status: 500 }
    );
  }
}