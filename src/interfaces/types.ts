import { NextRequest } from "next/server";

export interface User {
    _id: string;
    fullName: string;
    emailAddress: string;
    password: string;
    website: string;
    bio: string;
    imageUrl: string;
}

export interface Request extends NextRequest {
    user: User;
}
