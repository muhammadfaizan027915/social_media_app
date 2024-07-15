"use server";

import { SignInSchema, SignUpSchema } from "@/schemas/auth";
import { pathnames, SECRET_KEY } from "@/lib/constants";
import { generateResponse } from "@/lib/utils";
import { Response } from "@/interfaces/dto";
import { redirect } from "next/navigation";
import { MongooseError } from "mongoose";
import { cookies } from "next/headers";
import { SignJWT } from "jose";

import Database from "@/lib/database";
import User from "@/models/user";
import bcrypt from "bcrypt";

Database.connect();

export const signInAccount = async (prevState: Response, formData: FormData) => {
    const validation = SignInSchema.safeParse({
        emailAddress: formData.get("emailAddress"),
        password: formData.get("password"),
    });

    if (!validation.success) {
        return generateResponse({ success: false, errors: validation.error?.flatten().fieldErrors });
    }

    const data = validation.data;

    const user = await User.findOne({ emailAddress: data.emailAddress });

    if (!user || !(await bcrypt.compare(data.password, user.password))) {
        return generateResponse({ success: false, message: "Wrong email or password!" });
    }

    delete user.password;

    const jwt = new SignJWT({ user });
    const token = await jwt
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1d")
        .sign(new TextEncoder().encode(SECRET_KEY));

    cookies().set({
        value: token,
        httpOnly: true,
        maxAge: 24 * 60 * 60,
        name: "next.authentication.token",
        sameSite: true
    });

    return redirect(pathnames.FEED);
};

export const signUpAccount = async (prevState: Response, formData: FormData) => {
    const validation = SignUpSchema.safeParse({
        fullName: formData.get("fullName"),
        emailAddress: formData.get("emailAddress"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    });

    if (!validation.success) {
        return generateResponse({ success: false, errors: validation.error?.flatten().fieldErrors });
    }

    const data = validation.data;

    try {
        if (await User.findOne({ emailAddress: data.emailAddress })) {
            return generateResponse({ success: false, message: "Email already exists! " });
        }

        const user = new User({ ...data, password: await bcrypt.hash(data.password, 10) });
        await user.save();

        return generateResponse({ success: true, message: "Account created successfully!" });
    } catch (error) {
        if (error instanceof MongooseError) {
            return generateResponse({ success: false, message: error.message });
        }

        return generateResponse({ success: false, message: "Something went wrong!" });
    }
};
