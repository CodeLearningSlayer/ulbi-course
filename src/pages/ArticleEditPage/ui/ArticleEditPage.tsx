import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { useParams } from "react-router-dom";
import cls from "./ArticleEditPage.module.scss";

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <div className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? `Редактирование ${id}` : "Создание"}
        </div>
    );
};

export default ArticleEditPage;
