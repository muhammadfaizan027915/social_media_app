import ProfileCard from "@/components/cards/profile";
import { Response } from "@/interfaces/dto";
import { User } from "@/interfaces/types";
import { cookies } from "next/headers";

async function Profile() {
    const token = cookies().get("next.authentication.token");
    const response = await fetch(`http://localhost:3001/api/dashboard/profile?access_token=${token?.value}`);
    const json: Response<User> = await response.json();
    const user = json.data;

    return <div className="max-w-[798px] mx-auto">{user && <ProfileCard user={user} />}</div>;
}

export default Profile;
