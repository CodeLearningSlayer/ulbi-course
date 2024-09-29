import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ScrollRestoreSchema } from "../types/ScrollRestoreSchema";

const initialState: ScrollRestoreSchema = {
    scroll: {},
};

const scrollRestoreSlice = createSlice({
    name: "scrollRestore",
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            action: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

export const { actions: scrollRestoreActions } = scrollRestoreSlice;
export const { reducer: scrollRestoreReducer } = scrollRestoreSlice;

export default scrollRestoreSlice.reducer;
