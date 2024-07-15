import ProfileCard from "@/components/cards/profile";

async function Profile() {
    // const response = await fetch("http://localhost:3000/api/dashboard/profile");
    // const user = await response?.json();

    return (
        <div className="max-w-[798px] mx-auto">
            <ProfileCard />
        </div>
    );
}

export default Profile;
