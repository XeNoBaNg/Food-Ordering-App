import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

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

UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

const User = models.User || model("User", UserSchema, "users");
export default User;
