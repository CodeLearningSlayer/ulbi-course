import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleType } from "entities/Article";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageSortOrder,
    getArticlesPageType,
} from "../../selectors/articlesPageSelectors";

interface FetchArticleListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticleListProps | undefined,
    ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (props, thunkAPI) => {
    try {
        const state = thunkAPI.getState();

        const sort = getArticlesPageSort(state);
        const search = getArticlesPageSearch(state);
        const order = getArticlesPageSortOrder(state);
        const page = getArticlesPageNum(state);
        const type = getArticlesPageType(state);

        const limit = getArticlesPageLimit(thunkAPI.getState());

        addQueryParams({
            sort,
            order,
            search,
        });

        const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: "user",
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
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
