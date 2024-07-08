"use client";

import CreatePost from "@/components/cards/createPost";
import { AlertDialog, AlertDialogCancel, AlertDialogContent } from "@/components/ui/alert-dialog";
import { usePathname, useRouter } from "next/navigation";
import { X as CloseIcon } from "lucide-react";
import { pathnames } from "@/lib/constants";

function CreatePostModal() {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <AlertDialog open={pathname === pathnames.CREATE_POST}>
            <AlertDialogContent className="p-0">
                <AlertDialogCancel className="absolute top-2 right-2 px-2" onClick={router.back}>
                    <CloseIcon />
                </AlertDialogCancel>
                <CreatePost />
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default CreatePostModal;
