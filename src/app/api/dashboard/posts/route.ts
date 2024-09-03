import { NextResponse } from "next/server";
import { authenticateRoute } from "@/lib/auth";
import { generateResponse } from "@/lib/utils";
import { Request, Post as FeedPost } from "@/interfaces/types";
import Database from "@/lib/database";
import Post from "@/models/post";

Database.connect();

export const GET = authenticateRoute(async (request: Request) => {
    const searchParams = request.nextUrl.searchParams;
    const skip = parseInt(searchParams.get("skip") ?? "0");
    const limit = parseInt(searchParams.get("limit") ?? "0");

    const posts = await Post.find({})
        .populate({
            path: "createdBy",
            select: "fullName emailAddress imageUrl",
        })
        .select("-v")
        .sort({ createdOn: "desc" })
        .skip(skip)
        .limit(limit);

    const totalPosts = await Post.countDocuments();

    if (totalPosts === 0 || posts?.length === 0) {
        return NextResponse.json(
            generateResponse<{ posts: FeedPost[]; totalPosts: number }>({
                data: { posts: [], totalPosts: 0 },
                message: "Posts not found.",
                success: true,
            }),
            { status: 404 }
        );
    }

    return NextResponse.json(
        generateResponse<{ posts: FeedPost[]; totalPosts: number }>({ success: true, data: { posts, totalPosts } }),
        { status: 200 }
    );
});
