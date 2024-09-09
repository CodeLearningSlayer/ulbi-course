import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "entities/Profile/services/updateProfileData/updateProfileData";
import { USER__LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { userActions, userReducer } from "./userSlice";
import { User, UserSchema } from "../types/user";

describe("userSlice.test", () => {
    test("test setAuthData", () => {
        const state: DeepPartial<UserSchema> = {
            authData: undefined,
        };
        expect(
            userReducer(
                state as UserSchema,
                userActions.setAuthData({
                    id: "2",
                    username: "Max",
                }),
            ),
        ).toEqual({
            authData: {
                id: "2",
                username: "Max",
            },
        });
    });

    test("test logout", () => {
        const state: DeepPartial<UserSchema> = {
            authData: {
                id: "2",
                username: "Max",
            },
        };
        expect(userReducer(state as UserSchema, userActions.logout())).toEqual({
            authData: undefined,
        });
    });

    test("test initAuthData", () => {
        const state: DeepPartial<UserSchema> = {};

        Storage.prototype.getItem = jest.fn(() =>
            JSON.stringify({
                id: "2",
                username: "max",
            }),
        );

        expect(
            userReducer(state as UserSchema, userActions.initAuthData()),
        ).toEqual({
            authData: {
                id: "2",
                username: "max",
            },
            _initiated: true,
        });

        expect(localStorage.getItem).toHaveBeenCalledWith(
            USER__LOCALSTORAGE_KEY,
        );
    });
});
