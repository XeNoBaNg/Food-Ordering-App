import mongoose from "mongoose";

export async function PUT (req) {
    mongoose.connect(process.env.MONGO_URL)
    const data = await req.json()
}