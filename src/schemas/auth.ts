import zod from "zod";

export const SignInSchema = zod.object({
    emailAddress: zod
        .string({
            invalid_type_error: "Invalid email address",
            required_error: "Email is required",
        })
        .email({ message: "Invalid email address" }),

    password: zod
        .string({
            invalid_type_error: "Password is required",
            required_error: "Password is required",
        })
        .min(6),
});

export const SignUpSchema = zod
    .object({
        fullName: zod
            .string({
                invalid_type_error: "Full Name is required",
                required_error: "Full Name is required",
            })
            .min(5),

        emailAddress: zod
            .string({
                invalid_type_error: "Invalid email address",
                required_error: "Email is required",
            })
            .email({ message: "Invalid email address" }),

        password: zod
            .string({
                invalid_type_error: "Password is required",
                required_error: "Password is required",
            })
            .min(6),

        confirmPassword: zod
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
