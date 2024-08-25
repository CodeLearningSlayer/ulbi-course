import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";
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
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: mockData,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(mockData);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
