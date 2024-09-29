import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInitialized } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

interface FetchArticleListProps {
    page?: number;
}

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const isInititalized = getArticlesPageInitialized(getState());

    if (!isInititalized) {
        dispatch(articlesPageActions.initState());
        dispatch(
            fetchArticlesList({
                page: 1,
            }),
        );
    }
});
