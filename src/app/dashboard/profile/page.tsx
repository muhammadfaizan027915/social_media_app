import ProfileCard from "@/components/cards/profile";
import { getUserProfile } from "@/lib/api";

async function Profile() {
    const user = await getUserProfile();
    return <div className="max-w-[798px] mx-auto">{user && <ProfileCard user={user} />}</div>;
}

export default Profile;
