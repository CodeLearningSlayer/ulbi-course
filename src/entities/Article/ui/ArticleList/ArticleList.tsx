/* eslint-disable react/no-array-index-key */
import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import cls from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const renderSkeletons = (view: ArticleView) => {
    return (
        <>
            {Array(view === ArticleView.GRID ? 9 : 3)
                .fill(0)
                .map((item, index) => (
                    <ArticleListItemSkeleton
                        className={cls.card}
                        key={index}
                        view={view}
                    />
                ))}
        </>
    );
};

export const ArticleList = ({
    className,
    articles,
    isLoading,
    view = ArticleView.GRID,
}: ArticleListProps) => {
    const { t } = useTranslation();

    const renderArticle = (article: Article) => {
        console.log(isLoading, articles.length);

        return (
            <ArticleListItem
                className={cls.card}
                key={article.id}
                article={article}
                view={view}
            />
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    cls[view],
                    className,
                ])}
            >
                <Text size={TextSize.L} title={t("Статьи не найдены")} />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [cls[view], className])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && renderSkeletons(view)}
        </div>
    );
};
