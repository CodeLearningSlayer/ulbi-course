import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { Comment } from "entities/Comment";
import { getArticlesPageLimit } from "../../selectors/articlesPageSelectors";

interface FetchArticleListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>("articleDetailsPage/fetchCommentsByArticleId", async (props, thunkAPI) => {
    try {
        const { page = 1 } = props;
        const limit = getArticlesPageLimit(thunkAPI.getState());
        const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: "user",
                _limit: limit,
                _page: page,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue("error");
    }
});
