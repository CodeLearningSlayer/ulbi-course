import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { Comment } from "entities/Comment";

export const fetchArticlesList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>("articleDetailsPage/fetchCommentsByArticleId", async (_, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: "author",
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
