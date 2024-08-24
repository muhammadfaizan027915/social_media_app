"use client";

import PostCard from "../cards/post";
import { Post as FeedPost } from "@/interfaces/types";
import { useState } from "react";

type UserFeedProps = {
    initialPosts?: FeedPost[] | null;
};

function UserFeed({ initialPosts }: UserFeedProps) {
    const [posts, setPosts] = useState<FeedPost[] | null>(initialPosts ?? []);

    return (
        <>
            {posts?.map((post) => (
                <PostCard key={post?._id} post={post} />
            ))}
        </>
    );
}

export default UserFeed;
