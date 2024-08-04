import { Response } from "@/interfaces/dto";
import { BASE_URL } from "@/lib/constants";
import { User } from "@/interfaces/types";
import { cookies } from "next/headers";

export const getUserProfile = async () => {
    const token = cookies().get("next.authentication.token");
    const response = await fetch(`${BASE_URL}/dashboard/profile?access_token=${token?.value}`, {
        next: { tags: ["user-profile"] },
    });
    const json: Response<User> = await response.json();
    return json.data;
};
