import { AlertDialog, AlertDialogCancel, AlertDialogContent } from "@/components/ui/alert-dialog";
import { X as CloseIcon } from "lucide-react";
import { ReactNode } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent className="p-0">
                <AlertDialogCancel className="absolute top-2 right-2 px-2" onClick={onClose}>
                    <CloseIcon />
                </AlertDialogCancel>
                {children}
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default Modal;
