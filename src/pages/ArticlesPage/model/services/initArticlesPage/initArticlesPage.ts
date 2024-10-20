import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ArticleSortField } from "entities/Article";
import { SortOrder } from "shared/types";
import { getArticlesPageInitialized } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>("articlesPage/initArticlesPage", async (searchParams, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const isInititalized = getArticlesPageInitialized(getState());

    if (!isInititalized) {
        const orderFromUrl = searchParams.get("order") as SortOrder;
        const searchFromUrl = searchParams.get("search");
        const sortFromUrl = searchParams.get("sort") as ArticleSortField;

        if (orderFromUrl) {
            dispatch(articlesPageActions.setOrder(orderFromUrl));
        }

        if (searchFromUrl) {
            dispatch(articlesPageActions.setSearch(searchFromUrl));
        }

        if (sortFromUrl) {
            dispatch(articlesPageActions.setSort(sortFromUrl));
        }

        // const paramsToAdd = [
        //     {
        //         action: articlesPageActions.setOrder,
        //         param: orderFromUrl,
        //     },
        //     {
        //         action: articlesPageActions.setSearch,
        //         param: searchFromUrl,
        //     },
        //     {
        //         action: articlesPageActions.setSort,
        //         param: sortFromUrl,
        //     },
        // ].filter((item) => Boolean(item.param));

        // paramsToAdd.forEach(({ action, param }) => {
        //     if (param) {
        //         dispatch(action(param));
        //     }
        // });
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList());
    }
});
