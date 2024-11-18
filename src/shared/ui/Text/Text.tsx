import { Mods, classNames } from "shared/lib/classNames/classNames";
import React from "react";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    INVERTED = "inverted",
    ERROR = "error",
}

export enum TextAlign {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center",
}

export enum TextSize {
    M = "size_m",
    L = "size_l",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = ({
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
}: TextProps) => {
    const mods: Mods = {
        [cls[align]]: true,
    };

    const additionalClasses = [className, cls[theme], cls[size]];

    return (
        <div className={classNames(cls.Text, mods, additionalClasses)}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
