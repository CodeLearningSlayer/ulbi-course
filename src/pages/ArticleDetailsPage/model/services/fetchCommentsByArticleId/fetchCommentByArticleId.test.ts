import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";

describe("addCommentForArticle test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

        const comment = {
            text: "New comment",
            articleId: "5",
            id: "5",
            user: {
                id: "2",
                username: "Maxion",
            },
        };

        thunk.api.get.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await thunk.callThunk("5"); // тут данные берутся из стора: их надо замокать

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual(comment);
    });

    test("fail", async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId, {
            articleDetails: undefined,
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("");
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
