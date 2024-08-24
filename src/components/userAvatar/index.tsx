import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallbackProps, AvatarImageProps, AvatarProps } from "@radix-ui/react-avatar";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type UserAvatarProps = Partial<{
    avatarUrl: string;
    avatarFallback: string;
    avatarTitle: string;
    avatarSubTitle: string;
    avatarEditable?: boolean;

    className: string;
    avatarProps: AvatarProps;
    avatarImageProps: AvatarImageProps;
    avatarFallbackProps: AvatarFallbackProps;
}>;

function UserAvatar({ className, avatarProps, avatarImageProps, avatarFallbackProps, ...props }: UserAvatarProps) {
    return (
        <div className={cn(["flex items-center gap-4", className])}>
            <div className={props.avatarEditable ? "relative" : "static"}>
                <Avatar {...avatarProps} className={cn(["!static", avatarProps?.className])}>
                    <AvatarImage src={props?.avatarUrl} {...avatarImageProps} />
                    <AvatarFallback className="bg-slate-200" {...avatarFallbackProps}>
                        {props?.avatarFallback}
                    </AvatarFallback>
                </Avatar>
                {props.avatarEditable && (
                    <Link
                        href="/dashboard/profile?profile-image-url=true"
                        className="absolute bottom-4 right-0 z-10 bg-black rounded-full p-2"
                    >
                        <Camera className="text-white" size={"1.25rem"} />
                    </Link>
                )}
            </div>

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
