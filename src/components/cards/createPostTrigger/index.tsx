import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { pathnames } from "@/lib/constants";
import UserAvatar from "@/components/userAvatar";
import Link from "next/link";
import React from "react";

function CreatePostTrigger() {
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between">
                <UserAvatar className="w-fit" />
                <Button className="w-fit" asChild>
                    <Link href={pathnames.CREATE_POST}>Create Post</Link>
                </Button>
            </CardHeader>
        </Card>
    );
}

export default CreatePostTrigger;
