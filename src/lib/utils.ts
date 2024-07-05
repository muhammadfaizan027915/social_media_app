import { Response } from "@/interfaces/dto";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateResponse({ message, errors, data }: Response) {
  return {
    message: message || null,
    errors: errors || null,
    data: data || null,
  };
}
