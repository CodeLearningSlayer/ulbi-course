import { classNames } from "shared/lib/classNames/classNames";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import cls from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const { onClose, children, className, isOpen } = props;

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const [isClosing, setIsClosing] = useState(false);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const handleClose = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 200);
    }, [onClose]);

    const closeHandler = (e: React.MouseEvent) => {
        const { target } = e;
        const { currentTarget } = e;

        if (onClose && currentTarget === target) {
            handleClose();
        }
    };

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        },
        [handleClose],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, { ...mods }, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
