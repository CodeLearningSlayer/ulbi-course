import { StateSchema } from "app/providers/StoreProvider";
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from "./comments";

describe("Test comments selectors", () => {
    test("getArticleCommentsIsLoading selector", () => {
        expect(
            getArticleCommentsIsLoading({
                articleDetailsPage: {
                    comments: {
                        isLoading: true,
                    },
                },
            } as StateSchema),
        ).toEqual(true);
    });

    test("getArticleCommentsIsLoading undefined", () => {
        expect(getArticleCommentsIsLoading({} as StateSchema)).toEqual(
            undefined,
        );
    });

    test("getArticleCommentsError selector", () => {
        expect(
            getArticleCommentsError({
                articleDetailsPage: {
                    comments: {
                        error: "Something on da waaay",
                    },
                },
            } as StateSchema),
        ).toEqual("Something on da waaay");
    });
});
