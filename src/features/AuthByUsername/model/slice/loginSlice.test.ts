import { StateSchema } from "app/providers/StoreProvider";
import { loginActions, loginReducer } from "./loginSlice";
import { LoginSchema } from "../types/loginSchema";

describe("loginSlice.test", () => {
    test("test set username", () => {
        const state: DeepPartial<LoginSchema> = {
            username: "Max",
        };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername("123123123"),
            ),
        ).toEqual({
            username: "123123123",
        });
    });

    test("test set password", () => {
        const state: DeepPartial<LoginSchema> = {
            password: "123",
        };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword("123")),
        ).toEqual({
            password: "123",
        });
    });
});
