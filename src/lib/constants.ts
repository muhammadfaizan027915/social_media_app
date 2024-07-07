import { PieChart, Rss, User } from "lucide-react";

export const authPaths = { SIGNIN: "/signIn", SIGNUP: "/signUp" };

export const pathnames = { ...authPaths, FEED: "/dashboard/feed" };

export const navigations = [
    {
        name: "Feed",
        href: "/dashboard/feed",
        icon: Rss,
    },
    {
        name: "Analytics",
        href: "/dashboard/analytics",
        icon: PieChart,
    },
    {
        name: "Profile",
        href: "/dashboard/profile",
        icon: User,
    },
];

export const SECRET_KEY = process.env.SECRET_KEY || "Secret";
