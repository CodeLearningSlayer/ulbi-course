import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER__LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { UserSchema, User } from "../types/user";

const initialState: UserSchema = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER__LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
            console.log(Boolean(user), "IS USER LOGGED IN");
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER__LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

export default userSlice.reducer;
