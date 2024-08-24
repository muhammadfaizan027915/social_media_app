"use server";

import { generateResponse } from "@/lib/utils";
import { UpsertPostSchema } from "@/schemas/post";
import { Response } from "@/interfaces/dto";
import { decodeTokenUser, getAuthenticationTokenFromCookies } from "@/lib/auth";
import Database from "@/lib/database";
import Post from "@/models/post";

Database.connect();

export const createPost = async (state: Response | undefined, formData: FormData) => {
    try {
        const token = getAuthenticationTokenFromCookies();
        const user = decodeTokenUser(token);

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

        const post = new Post({ ...data, createdBy: user?._id });

        await post.save();

        return generateResponse({ success: true, message: "Post created successfully!" });
    } catch (error) {
        console.log(error);

        return generateResponse({ success: false, message: "Something went wrong!" });
    }
};
