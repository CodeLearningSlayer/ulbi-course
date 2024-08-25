import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { Profile } from "entities/Profile/model/types/profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { profileActions } from "../../model/slices/profileSlice";
import { fetchProfileData } from "./fetchProfileData";

jest.mock("axios");

const userData: Profile = {
    age: 22,
    city: "MSC",
    country: Country.BR,
    currency: Currency.RUB,
    name: "Max",
    username: "username",
};

describe("fetchProfileData test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ data: userData }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        console.log(result.payload);
        expect(result.payload).toEqual(userData);
    });

    test("fail", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
