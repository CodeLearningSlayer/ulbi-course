import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig, ThunkExtraArg } from "app/providers/StoreProvider";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER__LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

enum LoginErrors {
    INCORRECT_DATA = "",
    SERVER_ERROR = "",
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>("login/loginByUsername", async ({ password, username }, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.post<User>("/login", {
            password,
            username,
        });

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            USER__LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );
        thunkAPI.dispatch(userActions.setAuthData(response.data));
        thunkAPI.extra.navigate("/about");

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue("error");
    }
});
