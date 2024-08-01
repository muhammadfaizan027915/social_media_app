import ProfileCard from "@/components/cards/profile";
import { Response } from "@/interfaces/dto";
import { BASE_URL } from "@/lib/constants";
import { User } from "@/interfaces/types";
import { cookies } from "next/headers";

async function Profile() {
    const token = cookies().get("next.authentication.token");
    const response = await fetch(`${BASE_URL}/dashboard/profile?access_token=${token?.value}`);
    const json: Response<User> = await response.json();
    const user = json.data;

    return <div className="max-w-[798px] mx-auto">{user && <ProfileCard user={user} />}</div>;
}

export default Profile;
