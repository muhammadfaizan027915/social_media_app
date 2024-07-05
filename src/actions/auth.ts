"use server";

import { SignInSchema, SignUpSchema } from "@/schemas/auth";
import { redirect } from "next/navigation";
import User from "@/models/user";
import Database from "@/lib/db";
import bcrypt from "bcrypt";
import { generateResponse } from "@/lib/utils";
import { MongooseError } from "mongoose";
import { Response } from "@/interfaces/dto";
import { revalidatePath } from "next/cache";

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

  return redirect("/dashboard");
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

    revalidatePath("/signUp", "page");
    return generateResponse({ success: true, message: "Account created successfully!" });
  } catch (error) {
    if (error instanceof MongooseError) {
      return generateResponse({ success: false, message: error.message });
    }

    return generateResponse({ success: false, message: "Something went wrong!" });
  }
};
