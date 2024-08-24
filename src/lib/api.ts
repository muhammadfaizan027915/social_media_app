import { Response } from "@/interfaces/dto";
import { BASE_URL } from "@/lib/constants";
import { Post, User } from "@/interfaces/types";
import { getAuthenticationTokenFromCookies } from "./auth";

export const getUserProfile = async () => {
    const token = getAuthenticationTokenFromCookies();
    const response = await fetch(`${BASE_URL}/dashboard/profile?access_token=${token}`, {
        next: { tags: ["user-profile"] },
    });
    const json: Response<User> = await response.json();
    return json.data;
};

export const getPosts = async (skip: number, limit: number) => {
    const token = getAuthenticationTokenFromCookies();
    const response = await fetch(`${BASE_URL}/dashboard/posts?access_token=${token}&?skip=${skip}&limit=${limit}`, {
        next: { tags: ["posts"] },
    });
    const json: Response<Post[]> = await response.json();
    return json.data;
};
