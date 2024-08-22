import { Mods, classNames } from "shared/lib/classNames/classNames";
import React from "react";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export enum TextAlign {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "CENTER",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = ({
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
}: TextProps) => {
    const mods: Mods = {
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
