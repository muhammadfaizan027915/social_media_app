import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { pathnames } from "@/lib/constants";
import { getUserProfile } from "@/lib/api";
import { getNameInitials } from "@/lib/utils";
import UserAvatar from "@/components/userAvatar";
import Link from "next/link";
import React from "react";

async function CreatePostTrigger() {
    const user = await getUserProfile();
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between">
                <UserAvatar
                    className="w-fit"
                    avatarTitle={user?.fullName}
                    avatarSubTitle={user?.emailAddress}
                    avatarFallback={getNameInitials(user?.fullName)}
                    avatarUrl={user?.imageUrl}
                />
                <Button className="w-fit" asChild>
                    <Link href={pathnames.CREATE_POST}>Create Post</Link>
                </Button>
            </CardHeader>
        </Card>
    );
}

export default CreatePostTrigger;
