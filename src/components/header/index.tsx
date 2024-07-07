"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { getMatchingNavigation } from "@/lib/utils";

function Header() {
    const pathname = usePathname();
    return (
        <header className="flex items-center px-4 py-2 shadow-md sticky top-0">
            <h2 className="text-xl font-medium">{getMatchingNavigation(pathname)?.name}</h2>
            <Button variant={"link"} className="ml-auto">
                <LogOut className="mr-2" size="1.2rem" /> Logout
            </Button>
        </header>
    );
}

export default Header;
