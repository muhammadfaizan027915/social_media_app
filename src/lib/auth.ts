import { decodeJwt, jwtVerify } from "jose";
import { SECRET_KEY } from "./constants";
import { User } from "@/interfaces/types";

export const verifyToken = async (token: string) => {
    try {
        const decodedToken = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));

        if (decodedToken?.payload?.user) {
            return true;
        }
    } catch (error) {
        console.error("Error verifying JWT:", error);
        return false;
    }
};

export const decodeTokenUser = async (token: string) => {
    try {
        const payload = await decodeJwt(token);
        return payload.user as User;
    } catch (error) {
        console.log("Error decoding JWT user:", error);
        throw error;
    }
};
