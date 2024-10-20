import { StateSchema } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";

export const getArticlesPageIsLoading = (state: StateSchema) =>
    state.articlesPage?.isLoading || false;

export const getArticlesPageError = (state: StateSchema) =>
    state.articlesPage?.error;

export const getArticlesPageView = (state: StateSchema) =>
    state.articlesPage?.view || ArticleView.GRID;

export const getArticlesPageLimit = (state: StateSchema) =>
    state.articlesPage?.limit || 9;

export const getArticlesHasMore = (state: StateSchema) =>
    state.articlesPage?.hasMore;

export const getArticlesPageNum = (state: StateSchema) =>
    state.articlesPage?.page || 1;

export const getArticlesPageInitialized = (state: StateSchema) =>
    state.articlesPage?.__initialized || false;

export const getArticlesPageSort = (state: StateSchema) =>
    state.articlesPage?.sort ?? ArticleSortField.CREATED;

export const getArticlesPageSortOrder = (state: StateSchema) =>
    state.articlesPage?.order ?? "asc";

export const getArticlesPageSearch = (state: StateSchema) =>
    state.articlesPage?.search ?? "";

export const getArticlesPageType = (state: StateSchema) =>
    state.articlesPage?.type ?? ArticleType.ALL;
