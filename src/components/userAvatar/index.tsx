import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallbackProps, AvatarImageProps, AvatarProps } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

type UserAvatarProps = Partial<{
    avatarUrl: string;
    avatarFallback: string;
    avatarTitle: string;
    avatarSubTitle: string;

    className: string;
    avatarProps: AvatarProps;
    avatarImageProps: AvatarImageProps;
    avatarFallbackProps: AvatarFallbackProps;
}>;

function UserAvatar({ className, avatarProps, avatarImageProps, avatarFallbackProps, ...props }: UserAvatarProps) {
    return (
        <div className={cn(["flex items-center gap-4", className])}>
            <Avatar {...avatarProps}>
                <AvatarImage src={props?.avatarUrl} {...avatarImageProps} />
                <AvatarFallback className="bg-slate-200" {...avatarFallbackProps}>
                    {props?.avatarFallback}
                </AvatarFallback>
            </Avatar>

            <div className="flex-1 overflow-hidden">
                {props?.avatarTitle ? <h1 className="text-lg leading-4 font-medium">{props?.avatarTitle}</h1> : null}
                {props?.avatarSubTitle ? (
                    <p className="text-sm text-muted-foreground max-w-48 truncate">{props?.avatarSubTitle}</p>
                ) : null}
            </div>
        </div>
    );
}

export default UserAvatar;
