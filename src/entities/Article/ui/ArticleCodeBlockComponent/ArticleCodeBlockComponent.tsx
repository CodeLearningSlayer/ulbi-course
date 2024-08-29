import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import cls from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => {
    return (
        <div
            className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
        >
        </div>
    );
};
