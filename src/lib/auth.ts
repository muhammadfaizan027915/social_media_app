import { JWTInvalid } from "jose/errors";
import { SECRET_KEY } from "./constants";
import { User } from "@/interfaces/types";
import { NextResponse } from "next/server";
import { Request } from "@/interfaces/types";
import { decodeJwt, jwtVerify } from "jose";
import { generateResponse } from "./utils";
import { cookies } from "next/headers";

export const verifyToken = async (token: string) => {
    try {
        const decodedToken = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));

        if (decodedToken?.payload?.user) {
            return true;
        }
    } catch (error) {
        console.error("Error verifying JWT:", error);
        return false;
    }
};

export const decodeTokenUser = (token: string) => {
    try {
        const payload = decodeJwt(token);
        return payload.user as User;
    } catch (error) {
        console.log("Error decoding JWT user:", error);
        throw error;
    }
};

export function authorizeUser(callback: (request: Request) => Promise<NextResponse>) {
    return async (request: Request) => {
        const searchParams = request.nextUrl.searchParams;
        const token = searchParams.get("access_token") || cookies()?.get("next.authentication.token")?.value;
        try {
            if (!token) throw Error("JWT Token not found!");
            const user = decodeTokenUser(token);
            request.user = user;

            return callback(request);
        } catch (error) {
            if (error instanceof JWTInvalid) {
                return NextResponse.json(generateResponse({ success: false, message: error.message }), {
                    status: 401,
                });
            }

            return NextResponse.json(
                generateResponse({ success: false, message: (error as Error)?.message || "Something went wrong!" }),
                {
                    status: 500,
                }
            );
        }
    };
}
