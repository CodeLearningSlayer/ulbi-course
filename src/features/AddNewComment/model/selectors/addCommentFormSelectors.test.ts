import { StateSchema } from "app/providers/StoreProvider";
import { AddCommentFormSchema } from "../types/addNewComment";
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from "./addCommentFormSelectors";

const mockSchema: AddCommentFormSchema = {
    text: "Text",
    error: undefined,
};

describe("test commentForm selectors", () => {
    test("getCommentFormText selector", () => {
        expect(
            getAddCommentFormText({
                addComment: mockSchema,
            } as StateSchema),
        ).toEqual(mockSchema.text);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
    });

    test("getCommentFormError selector", () => {
        expect(
            getAddCommentFormError({
                addComment: {
                    ...mockSchema,
                    error: "Some error",
                },
            } as StateSchema),
        ).toEqual("Some error");
    });
});
