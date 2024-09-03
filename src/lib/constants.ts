import { Rss, User, Plus } from "lucide-react";

export const authPaths = { SIGNIN: "/signIn", SIGNUP: "/signUp" };

export const pathnames = { ...authPaths, FEED: "/dashboard/feed", CREATE_POST: "/dashboard/create" };

export const navigations = [
    {
        name: " Create Post",
        href: "/dashboard/create",
        icon: Plus,
    },
    {
        name: "Feed",
        href: "/dashboard/feed",
        icon: Rss,
    },
    {
        name: "Profile",
        href: "/dashboard/profile",
        icon: User,
    },
];

export const PAGE_SIZE_OF_POSTS = 5;

export const INITIAL_FORM_STATE = { data: null, errors: null, message: null, success: false };

export const SECRET_KEY = process.env.SECRET_KEY || "Secret";

export const BASE_URL = `${process.env.NEXT_PUBLIC_URL}/api`;
