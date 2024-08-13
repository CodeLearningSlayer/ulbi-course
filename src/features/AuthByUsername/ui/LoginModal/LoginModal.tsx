import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal onClose={onClose} isOpen={isOpen} lazy>
            <LoginForm />
        </Modal>
    );
};
