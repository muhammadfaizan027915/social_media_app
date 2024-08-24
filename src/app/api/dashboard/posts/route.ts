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
            select: "-password",
        })
        .sort({ createdOn: "desc" })
        .skip(skip)
        .limit(limit);

    return NextResponse.json(generateResponse<FeedPost[]>({ success: true, data: posts }), { status: 200 });
});
