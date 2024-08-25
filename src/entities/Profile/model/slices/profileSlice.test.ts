import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "entities/Profile/services/updateProfileData/updateProfileData";
import { profileActions, profileReducer } from "./profileSlice";
import { Profile, ProfileSchema, ValidateProfileError } from "../types/profile";

const userData: Profile = {
    age: 22,
    city: "MSC",
    country: Country.BR,
    currency: Currency.RUB,
    name: "Max",
    username: "username",
};

describe("profileSlice.test", () => {
    test("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({
            readonly: true,
        });
    });

    test("test cancel edit", () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateError: [ValidateProfileError.INCORRECT_AGE],
            form: { ...userData, name: "SUKA BLYA" },
            data: userData,
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            form: userData,
            validateError: [],
            data: userData,
        });
    });

    test("test update profile service pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.INCORRECT_AGE],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateError: [],
        });
    });

    test("test update profile service fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.INCORRECT_AGE],
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(userData, ""),
            ),
        ).toEqual({
            isLoading: false,
            readonly: true,
            validateError: [],
            form: userData,
            data: userData,
        });
    });
});
