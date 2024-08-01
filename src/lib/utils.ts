import { Request, Response } from "@/interfaces/dto";
import { NextResponse } from "next/server";
import { navigations } from "./constants";
import { twMerge } from "tailwind-merge";
import { decodeTokenUser } from "./auth";
import { JWTInvalid } from "jose/errors";
import { ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function generateResponse<T>({ success, message, errors, data }: Response<T>) {
    return {
        success,
        message: message || null,
        errors: errors || null,
        data: data || null,
    };
}

export function getMatchingNavigation(href: string) {
    return navigations.find((navigation) => navigation?.href === href);
}

export function authorizeUser(callback: (request: Request) => Promise<NextResponse>) {
    return async (request: Request) => {
        const searchParams = request.nextUrl.searchParams;
        const token = searchParams.get("access_token");
        try {
            if (!token) throw Error("JWT Token not found!");
            const user = await decodeTokenUser(token);
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
