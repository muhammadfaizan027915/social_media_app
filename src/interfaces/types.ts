import { NextRequest } from "next/server";

export interface Request extends NextRequest {
    user: User;
}

export interface User {
    _id: string;
    fullName: string;
    emailAddress: string;
    password: string;
    website: string;
    bio: string;
    imageUrl: string;
}

export interface Post {
    _id: string;
    body: string;
    imageUrl: string;
    createdBy: User;
    eval: string;
    createdAt: Date;
    updatedAt: Date;
}
