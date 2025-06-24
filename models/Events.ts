import mongoose, { Schema, Document, models } from "mongoose";

export interface IEvent extends Document {
  name: string;
  date: string; // ISO date string (YYYY-MM-DD)
  time: string; // e.g. "19:00"
  description: string;
}

const EventSchema = new Schema<IEvent>(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Event || mongoose.model<IEvent>("Event", EventSchema);