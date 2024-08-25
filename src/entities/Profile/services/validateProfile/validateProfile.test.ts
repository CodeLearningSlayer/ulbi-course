import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import {
    Profile,
    ValidateProfileError,
} from "entities/Profile/model/types/profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { validateProfile } from "./validateProfile";

jest.mock("axios");

const userData: Profile = {
    age: 22,
    city: "MSC",
    country: Country.BR,
    currency: Currency.RUB,
    name: "Max",
    username: "username",
};

describe("validateProfile test", () => {
    test("filled profile test", () => {
        const result = validateProfile(userData);

        expect(result).toEqual([]);
    });
    test("without name", async () => {
        userData.name = "";
        const result = validateProfile(userData);
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_NAME]);
    });
    test("without name and age", async () => {
        const result = validateProfile({
            ...userData,
            name: "",
            age: undefined,
        });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_NAME,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test("without name and age", async () => {
        const result = validateProfile({
            ...userData,
            name: "",
            age: undefined,
            country: undefined,
        });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_NAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
