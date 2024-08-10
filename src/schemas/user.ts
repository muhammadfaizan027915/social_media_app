import z from "zod";

export const UpdateUserSchema = z.object({
    fullName: z.string().nullish(),
    website: z.string().nullish(),
    bio: z.string().nullish(),
    imageUrl: z.string().nullish(),
});
