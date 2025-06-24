import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Events";
import { connectToDB } from "@/lib/connectDB";

// GET: Fetch all events
export async function GET() {
  await connectToDB();
  const events = await Event.find({}).sort({ date: 1, time: 1 });
  return NextResponse.json(events);
}

// POST: Create a new event
export async function POST(req: NextRequest) {
  await connectToDB();
  try {
    const { name, date, time, description } = await req.json();
    if (!name || !date || !time || !description) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    const event = await Event.create({ name, date, time, description });
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create event." }, { status: 500 });
  }
}