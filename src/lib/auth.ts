import { JWTInvalid } from "jose/errors";
import { User } from "@/interfaces/types";
import { NextResponse } from "next/server";
import { Request } from "@/interfaces/types";
import { generateResponse } from "./utils";
import { cookies } from "next/headers";
import { decodeJwt } from "jose";

export const getAuthenticationTokenFromCookies = () => {
    const token = cookies().get("next.authentication.token")?.value;
    return token;
};

export const getAuthenticationTokenFromSearchParams = (searchParams: URLSearchParams) => {
    return searchParams.get("access_token");
};

export const isVerifiedUser = () => {
    try {
        const token = getAuthenticationTokenFromCookies();

        const user = decodeTokenUser(token);

        return !!user?._id;
    } catch (error) {
        console.log("Error verifying JWT:", error);

        return false;
    }
};

export const decodeTokenUser = (token?: string) => {
    try {
        if (!token) throw new Error("Authentication token not found!");

        const payload = decodeJwt(token);
        return payload.user as User;
    } catch (error) {
        console.log("Error decoding JWT user:", error);
        throw error;
    }
};

export function authenticateRoute(callback: (request: Request) => Promise<NextResponse>) {
    return async (request: Request) => {
        const searchParams = request.nextUrl.searchParams;
        const token = getAuthenticationTokenFromSearchParams(searchParams) || getAuthenticationTokenFromCookies();
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
