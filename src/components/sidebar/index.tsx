import Logo from "@/components/logo";
import UserAvatar from "@/components/userAvatar";
import Navigation from "@/components/navigation";

function Sidebar() {
    return (
        <aside className="w-full border-r border-gray-200 p-4 relative h-svh shadow-lg ">
            <Logo className="justify-center" />
            <Navigation className="mt-8" />
            <UserAvatar className="absolute bottom-4" />
        </aside>
    );
}

export default Sidebar;
