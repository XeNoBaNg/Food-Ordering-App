import mongoose from "mongoose";
import User from "../../models/User";
import dotenv from "dotenv";

dotenv.config();

export async function POST(req) {
    try {
        const body = await req.json();

        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB Connected");

        const createdUser = await User.create(body);

        return new Response(JSON.stringify(createdUser), { status: 201 });
    } catch (error) {
        console.error("Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
