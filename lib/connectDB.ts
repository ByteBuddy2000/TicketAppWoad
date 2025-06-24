import mongoose from "mongoose";

// Define the shape of the connection object
interface Connection {
  isConnected?: number;
}

// Create a typed connection object
const connection: Connection = {};

export const connectToDB = async (): Promise<void> => {
  try {
    // If already connected, skip
    if (mongoose.connection.readyState >= 1) return;

    const db = await mongoose.connect(process.env.MONGODB_URI as string); // cast to string
    connection.isConnected = db.connections[0].readyState;

    console.log("✅ Connected to MongoDB!");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Failed to connect to MongoDB:", error.message);
      throw new Error(error.message);
    } else {
      console.error("❌ Unknown error occurred during DB connection");
      throw new Error("Unknown error occurred");
    }
  }
};
