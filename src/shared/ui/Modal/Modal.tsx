import { classNames } from "shared/lib/classNames/classNames";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import cls from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    lazy?: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const { onClose, children, className, isOpen, lazy } = props;

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const [isClosing, setIsClosing] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

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

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    // тут мы просто возвращаем null и ничего не отрисовываем
    if (lazy && !isMounted) {
        return null;
    }

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
