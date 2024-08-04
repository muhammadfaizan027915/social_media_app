"use client";

import Modal from "@/components/common/modal";
import ProfileImageUrl from "@/components/cards/profileImageUrl";
import { useSearchParams, useRouter } from "next/navigation";

type ProfileImageUrlModalProps = {
    defaultProfileImageUrl?: string;
};

function ProfileImageUrlModal({ defaultProfileImageUrl }: ProfileImageUrlModalProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isOpen = searchParams.get("profile-image-url");
    return (
        <Modal isOpen={!!isOpen} onClose={router.back}>
            <ProfileImageUrl onSuccess={router.back} defaultProfileImageUrl={defaultProfileImageUrl} />
        </Modal>
    );
}

export default ProfileImageUrlModal;
