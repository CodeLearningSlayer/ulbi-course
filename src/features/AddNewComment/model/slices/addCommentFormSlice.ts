import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addNewComment";

const initialState: AddCommentFormSchema = {
    error: undefined,
    text: "",
};

const addComentFormSlice = createSlice({
    name: "addComment",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentActions } = addComentFormSlice;
export const { reducer: addCommentReducer } = addComentFormSlice;

export default addComentFormSlice.reducer;
