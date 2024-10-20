import { EntityState } from "@reduxjs/toolkit";
import {
    Article,
    ArticleView,
    ArticleSortField,
    ArticleType,
} from "entities/Article";

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    view: ArticleView;
    order: "asc" | "desc";
    search: string;
    type: ArticleType;

    sort: ArticleSortField;

    __initialized: boolean;
}
