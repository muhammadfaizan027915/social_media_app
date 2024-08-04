import z from "zod";

export const UserSchema = z.object({
    _id: z.string().optional().nullable(),
    fullName: z.string().optional().nullable(),
    emailAddress: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    website: z.string().optional().nullable(),
    bio: z.string().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
});
