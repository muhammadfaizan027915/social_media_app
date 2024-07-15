import { Response } from "@/interfaces/dto";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { navigations } from "./constants";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function generateResponse<T>({ success, message, errors, data }: Response<T>) {
    return {
        success,
        message: message || null,
        errors: errors || null,
        data: data || null,
    };
}

export function getMatchingNavigation(href: string) {
    return navigations.find((navigation) => navigation?.href === href);
}
