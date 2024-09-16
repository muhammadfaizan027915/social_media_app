"use client";

import PostCard from "../cards/post";
import { useEffect, useState } from "react";
import { Post as FeedPost, Post } from "@/interfaces/types";
import { BASE_URL, PAGE_SIZE_OF_POSTS } from "@/lib/constants";
import { useInView } from "react-intersection-observer";
import { Response } from "@/interfaces/dto";

type UserFeedProps = {
    initialPosts?: FeedPost[];
    totalPosts?: number;
};

function UserFeed({ initialPosts, totalPosts = 0 }: UserFeedProps) {
    const { ref, inView } = useInView();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(PAGE_SIZE_OF_POSTS);
    const [posts, setPosts] = useState<FeedPost[]>(initialPosts || []);

    const getPosts = async (skip: number, limit: number) => {
        const response = await fetch(`${BASE_URL}/dashboard/posts?skip=${skip}&limit=${limit}`);
        const json: Response<{ posts: Post[] }> = await response.json();
        return json.data?.posts;
    };

    useEffect(() => {
        if (inView && offset <= totalPosts) {
            (async () => {
                setIsLoading(true);
                const posts = (await getPosts(offset, PAGE_SIZE_OF_POSTS)) || [];
                setPosts((prevPosts) => [...prevPosts, ...posts]);
                setOffset(offset + PAGE_SIZE_OF_POSTS);
                setIsLoading(false);
            })();
        }
    }, [inView, offset, totalPosts]);

    return (
        <>
            {posts?.map((post) => (
                <PostCard key={post?._id} post={post} />
            ))}

            <p ref={ref} className="text-center font-semibold">
                {isLoading ? `Loading...` : ""}
            </p>
        </>
    );
}

export default UserFeed;
