import mongoose from "mongoose";
import { generateId } from "@/lib/utils";

const PostSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: generateId,
        },

        body: {
            type: String,
        },

        imageUrl: {
            type: String,
        },

        createdBy: {
            type: String,
            ref: "User",
        },
    },
    { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
