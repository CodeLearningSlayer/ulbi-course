import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileData } from "./getProfileData";
import { Profile } from "../../types/profile";

describe("getProfileData test", () => {
    const mockData: Profile = {
        age: 22,
        city: "Moscow",
        country: Country.BR,
        currency: Currency.RUB,
        name: "Max",
        username: "Maxion",
    };
    test("should return false", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: mockData,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(mockData);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
