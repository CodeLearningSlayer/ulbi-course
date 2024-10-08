import { classNames } from "shared/lib/classNames/classNames";
import React, { ReactNode, useCallback } from "react";
import CopyIcon from "shared/assets/icons/copy.svg";
import cls from "./Code.module.scss";
import { Button, ThemeButton } from "../Button/Button";

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = ({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ThemeButton.CLEAR}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
};
