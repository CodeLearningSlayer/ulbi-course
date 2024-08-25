import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import {
    Profile,
    ValidateProfileError,
} from "entities/Profile/model/types/profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "./updateProfileData";

jest.mock("axios");

const userData: Profile = {
    age: 22,
    city: "MSC",
    country: Country.BR,
    currency: Currency.RUB,
    name: "Max",
    username: "username",
};

describe("updateProfileData test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: userData,
            },
        });

        thunk.api.put.mockReturnValue(
            Promise.resolve({
                data: userData,
            }),
        );
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userData);
    });

    test("fail", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: undefined,
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.payload).toEqual([ValidateProfileError.NO_DATA]);
        expect(result.meta.requestStatus).toBe("rejected");
    });

    test("server failed", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: userData,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
        expect(result.meta.requestStatus).toBe("rejected");
    });

    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...userData, name: "" },
            },
        });
        const result = await thunk.callThunk();
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_NAME,
        ]);
    });
});
