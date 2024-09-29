import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchProfileData test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({ page: 3 });
    });

    test("fetchArticleList not called", () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenNthCalled();
    });
});
