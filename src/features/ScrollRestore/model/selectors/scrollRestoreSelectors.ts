import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

export const getScrollPositions = (state: StateSchema) =>
    state.scrollRestore.scroll;

export const getScrollByPath = createSelector(
    getScrollPositions,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
