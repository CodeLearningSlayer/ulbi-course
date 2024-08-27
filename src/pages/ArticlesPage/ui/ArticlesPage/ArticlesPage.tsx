import { classNames } from "shared/lib/classNames/classNames";
import React, { memo } from "react";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return <div className={classNames(cls.ArticlesPage, {}, [className])} />;
};

export default memo(ArticlesPage);
