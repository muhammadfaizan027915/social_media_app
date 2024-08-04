"use client";

import CreatePost from "@/components/cards/createPost";
import { usePathname, useRouter } from "next/navigation";
import { pathnames } from "@/lib/constants";
import { User } from "@/interfaces/types";
import Modal from "@/components/common/modal";

type CreatePostModalProps = {
    user?: User | null;
};

function CreatePostModal({ user }: CreatePostModalProps) {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <Modal isOpen={pathname === pathnames.CREATE_POST} onClose={router.back}>
            <CreatePost user={user} />
        </Modal>
    );
}

export default CreatePostModal;
