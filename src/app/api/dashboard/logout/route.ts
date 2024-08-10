import { NextResponse } from "next/server";
import { generateResponse } from "@/lib/utils";
import { authorizeUser } from "@/lib/auth";
import { cookies } from "next/headers";
import Database from "@/lib/database";

Database.connect();

export const POST = authorizeUser(async () => {
    cookies().delete("next.authentication.token");
    return NextResponse.json(generateResponse({ success: true, message: "Logged out successfully!", data: null }), {
        status: 200,
    });
});
