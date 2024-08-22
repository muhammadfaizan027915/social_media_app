"use server";

import { generateResponse } from "@/lib/utils";
import { UpsertPostSchema } from "@/schemas/post";
import { Response } from "@/interfaces/dto";
import { isVerifiedUser } from "@/lib/auth";
import Database from "@/lib/database";
import Post from "@/models/post";

Database.connect();

export const createPost = async (state: Response | undefined, formData: FormData) => {
    try {
        if (!(await isVerifiedUser())) {
            throw new Error("Unauthorized!");
        }

        const validation = UpsertPostSchema.safeParse({
            imageUrl: formData.get("imageUrl"),
            body: formData.get("body"),
        });

        if (!validation?.success) {
            return generateResponse({
                success: false,
                errors: validation.error?.flatten().fieldErrors,
                message: validation?.error?.flatten().formErrors[0],
            });
        }

        const data = validation.data;

        const post = new Post(data);

        await post.save();

        return generateResponse({ success: true, message: "Post created successfully!" });
    } catch (error) {
        console.log(error);

        return generateResponse({ success: false, message: "Something went wrong!" });
    }
};

export const getPosts = async (skip: number, limit: number) => {
    try {
        if (!(await isVerifiedUser())) {
            throw new Error("Unauthorized!");
        }

        const posts = await Post.find({}).sort({ createdOn: "desc" }).skip(skip).limit(limit);

        return generateResponse({ success: true, data: posts });
    } catch (error) {
        console.log(error);

        return generateResponse({ success: false, message: "Something went wrong!" });
    }
};
