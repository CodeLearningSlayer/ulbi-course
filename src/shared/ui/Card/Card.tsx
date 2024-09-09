import { classNames } from "shared/lib/classNames/classNames";
import React, { FC, HTMLAttributes, ReactNode } from "react";
import cls from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = (props: CardProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
};
