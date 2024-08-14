import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { loginActions, loginReducer } from "./loginSlice";
import { LoginSchema } from "../types/loginSchema";

describe("loginSlice.test", () => {
    test("test set username", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: "Max",
            },
        };
        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername()),
        ).toEqual({
            username: "Max",
        });
    });

    test("test set password", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: "123",
            },
        };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword()),
        ).toEqual({
            password: "123",
        });
    });
});
