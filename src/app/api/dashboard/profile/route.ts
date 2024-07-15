import { NextRequest, NextResponse } from "next/server";
import { generateResponse } from "@/lib/utils";
import { decodeTokenUser } from "@/lib/auth";
import { User } from "@/interfaces/types";
import { JWTInvalid } from "jose/errors";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get("access_token");

    try {
        if (!token) throw Error("JWT Token not found!");
        const user = await decodeTokenUser(token);

        return NextResponse.json(generateResponse({ success: false, message: "User sent successfully!", data: user }), {
            status: 200,
        });
    } catch (error) {
        if (error instanceof JWTInvalid) {
            return NextResponse.json(generateResponse({ success: false, message: error.message }), {
                status: 401,
            });
        }

        return NextResponse.json(generateResponse({ success: false, message: "Something went wrong!" }), {
            status: 500,
        });
    }
}
