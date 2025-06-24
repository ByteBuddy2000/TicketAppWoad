import mongoose, { Document, Model, Schema } from "mongoose";

export interface IBooking extends Document {
  name: string;
  email: string;
  celebrity: string;
  ticketType: string;
  paymentMethod: string;
  referralCode?: string | null; // <-- Add this
  createdAt?: Date;
  updatedAt?: Date;
}

const BookingSchema: Schema<IBooking> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    celebrity: { type: String, required: true },
    ticketType: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    referralCode: { type: String, default: null }, // <-- Add this
  },
  { timestamps: true }
);

const Booking: Model<IBooking> = mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);
export default Booking;