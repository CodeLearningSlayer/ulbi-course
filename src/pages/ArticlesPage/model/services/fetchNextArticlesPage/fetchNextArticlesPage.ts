import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { Comment } from "entities/Comment";
import {
    getArticlesPageLimit,
    getArticlesHasMore,
    getArticlesPageNum,
    getArticlesPageIsLoading,
} from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

interface FetchArticleListProps {
    page?: number;
}

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, thunkAPI) => {
    try {
        const { dispatch, getState } = thunkAPI;

        const page = getArticlesPageNum(getState());
        const hasMore = getArticlesHasMore(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(
                fetchArticlesList({
                    page: page + 1,
                }),
            );
        }
    } catch (e) {
        return thunkAPI.rejectWithValue("error");
    }
});
