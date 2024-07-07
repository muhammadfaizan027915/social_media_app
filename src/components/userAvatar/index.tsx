import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
    className?: string;
};

function UserAvatar({ className }: UserAvatarProps) {
    return (
        <div className={cn(["flex items-center gap-4", className])}>
            <Avatar>
                <AvatarImage src="/" />
                <AvatarFallback className="bg-slate-200">MF</AvatarFallback>
            </Avatar>

            <div className="flex-1 overflow-hidden">
                <h1 className="text-lg leading-4 font-medium">Muhammad Faizan</h1>
                <p className="text-sm text-muted-foreground max-w-48 truncate">muhammadfaizan027915@gmail.com</p>
            </div>
        </div>
    );
}

export default UserAvatar;
