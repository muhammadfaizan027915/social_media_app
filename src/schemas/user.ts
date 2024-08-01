import z from "zod";

export const UserSchema = z.object({
    _id: z.string().optional(),
    fullName: z.string().optional(),
    emailAddress: z.string().optional(),
    password: z.string().optional(),
    website: z.string().optional(),
    bio: z.string().optional(),
    imageUrl: z.string().optional(),
});
