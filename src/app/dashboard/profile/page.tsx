import ProfileCard from "@/components/cards/profile";
import ProfileImageUrlModal from "@/components/modals/profileImageUrl";
import { getUserProfile } from "@/lib/api";

async function Profile() {
    const user = await getUserProfile();
    return (
        <div className="max-w-[798px] mx-auto">
            {user && <ProfileCard user={user} />}
            <ProfileImageUrlModal defaultProfileImageUrl={user?.imageUrl} />
        </div>
    );
}

export default Profile;
