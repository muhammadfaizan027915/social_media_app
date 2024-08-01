import z from "zod";

export const SignInSchema = z.object({
    emailAddress: z
        .string({
            invalid_type_error: "Invalid email address",
            required_error: "Email is required",
        })
        .email({ message: "Invalid email address" }),

    password: z
        .string({
            invalid_type_error: "Password is required",
            required_error: "Password is required",
        })
        .min(6),
});

export const SignUpSchema = z
    .object({
        fullName: z
            .string({
                invalid_type_error: "Full Name is required",
                required_error: "Full Name is required",
            })
            .min(5),

        emailAddress: z
            .string({
                invalid_type_error: "Invalid email address",
                required_error: "Email is required",
            })
            .email({ message: "Invalid email address" }),

        password: z
            .string({
                invalid_type_error: "Password is required",
                required_error: "Password is required",
            })
            .min(6),

        confirmPassword: z
            .string({
                invalid_type_error: "Confirm Password is required",
                required_error: "Confirm Password is required",
            })
            .min(6),
    })

    .superRefine((value, context) => {
        if (value.password !== value.confirmPassword) {
            context.addIssue({
                code: "custom",
                path: ["confirmPassword"],
                message: "Confirm password must match the password",
            });
        }
    });
