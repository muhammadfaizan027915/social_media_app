import Logo from "@/components/logo";
import UserAvatar from "@/components/userAvatar";
import Navigation from "@/components/navigation";
import { getUserProfile } from "@/lib/api";
import { getNameInitials } from "@/lib/utils";

async function Sidebar() {
    const user = await getUserProfile();
    return (
        <aside className="w-full border-r border-gray-200 p-4 relative h-svh shadow-lg ">
            <Logo className="justify-center" />
            <Navigation className="mt-8" />
            <UserAvatar
                className="absolute bottom-4"
                avatarTitle={user?.fullName}
                avatarSubTitle={user?.emailAddress}
                avatarFallback={getNameInitials(user?.fullName)}
                avatarUrl={user?.imageUrl}
            />
        </aside>
    );
}

export default Sidebar;
