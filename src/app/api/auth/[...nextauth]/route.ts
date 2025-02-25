import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '../../../models/User'
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../libs/mongoConnect"

const UserModel = mongoose.models.User || User

async function connectDB() {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
}

const handler = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "test@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials?.password) {
                        throw new Error("Missing email or password");
                    }
            
                    await mongoose.connect(process.env.MONGO_URL);
            
                    console.log("Mongoose Models:", mongoose.models); // Check if "User" is in the list
            
                    const user = await User.findOne({ email: credentials.email }).lean();
            
                    console.log("User Found:", user); // Debug user output
            
                    if (!user || !user.password || !(await bcrypt.compare(credentials.password, user.password))) {
                        throw new Error("Invalid email or password");
                    }
            
                    return { id: user._id.toString(), name: user.email, email: user.email };
                } catch (error) {
                    console.error("Auth Error:", error);
                    throw new Error("Authentication failed");
                }
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            if (session?.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },
    pages: {
        signIn: "/login",
    },
});

export { handler as GET, handler as POST };
