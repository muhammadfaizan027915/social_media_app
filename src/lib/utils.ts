import { Response } from "@/interfaces/dto";
import { navigations } from "./constants";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

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

export function getNameInitials(name?: string) {
    if (!name) return;

    const regex = /(\b\S)?/g;
    const matches = name?.match(regex);
    return matches?.join("").toUpperCase();
}

export function clearNullValues(object: Record<string, any | null>) {
    Object.keys(object).forEach((key: string) => {
        if (object[key] === null) {
            delete object[key];
        }
    });

    return object;
}
