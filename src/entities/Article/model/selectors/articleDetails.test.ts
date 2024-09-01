import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetails } from "./articleDetails";
import { Article } from "../types/article";

const article = {
    id: "1",
    title: "Javascript news",
};

const data = {
    data: {
        ...article,
    },
    isLoading: false,
    error: "false",
};

describe("test articleDetails", () => {
    test("test articleDetails selector", () => {
        expect(
            getArticleDetails({
                articleDetails: {
                    data: {
                        ...article,
                    },
                    isLoading: false,
                    error: "false",
                },
            } as StateSchema),
        ).toEqual(data.data);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetails(state as StateSchema)).toEqual(undefined);
    });
});
