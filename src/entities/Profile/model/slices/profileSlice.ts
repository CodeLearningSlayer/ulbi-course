import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { updateProfileData } from "../../services/updateProfileData/updateProfileData";
import { Profile, ProfileSchema, ValidateProfileError } from "../types/profile";
import { fetchProfileData } from "../../services/fetchProfileData/fetchProfileData";

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
    validateError: [],
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateError = [];
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = { ...state.form, ...action.payload };
        },
        saveChanges: (state) => {
            state.data = state.form;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                },
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.validateError = [];
                state.isLoading = true;
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                    state.readonly = true;
                    state.validateError = [];
                },
            )
            .addCase(
                updateProfileData.rejected,
                (
                    state,
                    action: PayloadAction<ValidateProfileError[] | undefined>,
                ) => {
                    state.isLoading = false;
                    state.validateError = action.payload ?? [];
                },
            );
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

export default profileSlice.reducer;
