import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getUserAuthData } from "entities/User";
import { getArticleDetails } from "entities/Article";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>("articleDetailsPage/addCommentForArticle", async (text, thunkAPI) => {
    const { getState, rejectWithValue, dispatch } = thunkAPI;

    try {
        const userData = getUserAuthData(getState());
        const articleDetails = getArticleDetails(getState());

        if (!userData || !text || !articleDetails) {
            return rejectWithValue("no data");
        }

        const response = await thunkAPI.extra.api.post<Comment>("/comments", {
            text,
            articleId: articleDetails.id,
            userId: userData.id,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(articleDetails.id));

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue("error");
    }
});
