"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { navigations } from "@/lib/constants";
import { cn } from "@/lib/utils";

type NavigationProps = {
    className?: string;
};

function Navigation({ className }: NavigationProps) {
    const pathname = usePathname();

    return (
        <nav className={cn(["flex flex-col items-center gap-2", className])}>
            {navigations?.map((navigation) => {
                const Icon = navigation.icon;
                const active = navigation.href === pathname;

                return (
                    <Button
                        asChild
                        key={navigation?.href}
                        variant={active ? "default" : "ghost"}
                        className={cn([
                            "w-full justify-start rounded-xl p-6",
                            active ? "shadow-md shadow-gray-300" : "",
                        ])}
                    >
                        <Link href={navigation.href} className="flex items-center gap-2 font-normal text-base">
                            <Icon size={"1.2rem"} />
                            {navigation.name}
                        </Link>
                    </Button>
                );
            })}
        </nav>
    );
}

export default Navigation;
