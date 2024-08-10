import z from "zod";

export const UpsertPostSchema = z
    .object({
        body: z.string().max(300).nullish(),
        imageUrl: z.string().url().nullish().or(z.literal("")),
    })
    .superRefine(({ body, imageUrl }, context) => {
        if (!body && !imageUrl) {
            context.addIssue({
                code: "custom",
                message: "At least must fill one of these fields",
            });
        }
    });
