import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>("articleDetails/fetchProfileData", async (articleId, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<Article>(
            `/articles/${articleId}`,
            {
                params: {
                    _expand: "user",
                },
            },
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue("error");
    }
});
