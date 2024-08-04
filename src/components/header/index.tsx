"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { BASE_URL } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { getMatchingNavigation } from "@/lib/utils";
import { useRouter } from "next/navigation";

function Header() {
    const router = useRouter();
    const pathname = usePathname();

    const onLogout = async () => {
        const response = await fetch(`${BASE_URL}/dashboard/logout`, { method: "POST", credentials: "include" });
        if (response.ok) {
            router.push("/signIn");
        }
    };

    return (
        <header className="flex items-center px-4 py-2 shadow-md bg-white">
            <h2 className="text-xl font-medium">{getMatchingNavigation(pathname)?.name}</h2>
            <Button variant={"link"} className="ml-auto" onClick={onLogout}>
                <LogOut className="mr-2" size="1.2rem" /> Logout
            </Button>
        </header>
    );
}

export default Header;
