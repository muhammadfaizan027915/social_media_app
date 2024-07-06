import { Response } from "@/interfaces/dto";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateResponse({ success, message, errors, data }: Response) {
  return {
    success,
    message: message || null,
    errors: errors || null,
    data: data || null,
  };
}
