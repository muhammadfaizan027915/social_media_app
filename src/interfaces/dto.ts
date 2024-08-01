import { NextRequest } from "next/server";
import { User } from "./types";

export interface Response<T = {}> {
    errors?: any | null;
    message?: string | null;
    data?: T | null;
    success: boolean;
}

export interface Request extends NextRequest {
    user: User;
}
