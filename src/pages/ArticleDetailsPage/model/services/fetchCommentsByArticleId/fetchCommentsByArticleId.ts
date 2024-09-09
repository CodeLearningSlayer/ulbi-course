import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>(
    "articleDetailsPage/fetchCommentsByArticleId",
    async (articleId: string | undefined, thunkAPI) => {
        try {
            if (!articleId) {
                return thunkAPI.rejectWithValue("no id");
            }

            const response = await thunkAPI.extra.api.get<Comment[]>(
                `/comments`,
                {
                    params: {
                        articleId,
                        _expand: "user",
                    },
                },
            );

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("error");
        }
    },
);
