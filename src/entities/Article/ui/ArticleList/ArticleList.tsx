/* eslint-disable react/no-array-index-key */
import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
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
    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                className={cls.card}
                key={article.id}
                article={article}
                view={view}
            />
        );
    };

    return (
        <div
            className={classNames(cls.ArticleList, {}, [cls[view], className])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && renderSkeletons(view)}
        </div>
    );
};
