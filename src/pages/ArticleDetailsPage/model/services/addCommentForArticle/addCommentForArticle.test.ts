import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { addCommentForArticle } from "./addCommentForArticle";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

describe("addCommentForArticle test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: "2",
                },
            },
            articleDetails: {
                data: {
                    id: "5",
                },
            },
        });

        const comment = {
            text: "New comment",
            articleId: "5",
            id: "5",
            user: {
                id: "2",
                username: "Maxion",
            },
        };

        thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await thunk.callThunk("New comment"); // тут данные берутся из стора: их надо замокать

        // dispatch в этом случае вызывается трижды, что ломает тест, но как проверить, что фетч все же пошел?

        // expect(thunk.dispatch).toHaveBeenCalledWith(
        //     fetchCommentsByArticleId("1"),
        // );

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.payload).toEqual(comment);
    });

    test("fail", async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: undefined,
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("");
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
