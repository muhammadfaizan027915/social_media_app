import { jwtVerify } from "jose";
import { SECRET_KEY } from "./constants";

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
}