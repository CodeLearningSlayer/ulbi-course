import { Mods, classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC, memo } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    OUTLINE_RED = "outlineRed",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

export const enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, { ...mods }, [
                className,
                cls[theme],
                cls[size],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
