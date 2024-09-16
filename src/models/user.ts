import mongoose from "mongoose";
import { generateId } from "@/lib/utils";

const UserSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: generateId,
        },

        fullName: {
            type: String,
            required: true,
        },

        emailAddress: {
            type: String,
            required: true,
            unique: true,
        },

        website: {
            type: String,
        },

        bio: {
            type: String,
        },

        password: {
            type: String,
            required: true,
        },

        imageUrl: {
            type: String,
        },
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
