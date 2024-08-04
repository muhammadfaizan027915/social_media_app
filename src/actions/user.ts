"use server";

import { generateResponse } from "@/lib/utils";
import { decodeTokenUser } from "@/lib/auth";
import { UserSchema } from "@/schemas/user";
import { revalidateTag } from "next/cache";
import { Response } from "@/interfaces/dto";
import { cookies } from "next/headers";

import User from "@/models/user";

export const updateUser = async (state: Response | undefined, formData: FormData) => {
    const token = cookies().get("next.authentication.token")?.value;

    try {
        if (!token) throw new Error("Authentication token not found!");

        const validation = UserSchema.safeParse({
            fullName: formData.get("fullName"),
            website: formData.get("website"),
            bio: formData.get("bio"),
        });

        const user = await decodeTokenUser(token);

        if (!validation.success) {
            return generateResponse({ success: false, errors: validation.error?.flatten().fieldErrors });
        }

        const data = validation?.data;

        await User.findOneAndUpdate({ _id: user?._id }, { $set: { ...data } }, { new: true });

        revalidateTag("user-profile");
    } catch (error) {
        console.log(error);
        return generateResponse({ success: false, message: "Something went wrong!" });
    }
};
