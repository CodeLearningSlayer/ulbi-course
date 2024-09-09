import { addCommentReducer, addCommentActions } from "./addCommentFormSlice";
import { AddCommentFormSchema } from "../types/addNewComment";

describe("addCommentFormSlice test", () => {
    test("setText test", () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: "",
        };
        expect(
            addCommentReducer(state, addCommentActions.setText("My new text")),
        ).toEqual({
            text: "My new text",
        });
    });
});
