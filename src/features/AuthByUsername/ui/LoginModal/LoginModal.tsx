import React, { Suspense } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { Loader } from "shared/ui/Loader";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal className={className} onClose={onClose} isOpen={isOpen} lazy>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
