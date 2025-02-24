import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: {
            type: String,
            required: true,
            validate: {
                validator: (pass) => pass?.length >= 5,
                message: "Password must be at least 5 characters long!",
            },
        },
    },
    { timestamps: true }
);

const User = models?.User || model("User", UserSchema);
export default User;
