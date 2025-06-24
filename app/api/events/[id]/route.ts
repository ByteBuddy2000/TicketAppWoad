import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Events";
import { connectToDB } from "@/lib/connectDB";

// Update an event by ID
export async function PUT(req: NextRequest, context: any) {
  await connectToDB();
  const { id } = context.params;
  try {
    const { name, date, time, description } = await req.json();
    const updated = await Event.findByIdAndUpdate(
      id,
      { name, date, time, description },
      { new: true }
    );
    if (!updated) {
      return NextResponse.json({ error: "Event not found." }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update event." }, { status: 500 });
  }
}