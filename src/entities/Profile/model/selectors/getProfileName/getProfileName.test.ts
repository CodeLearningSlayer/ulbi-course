import { StateSchema } from "app/providers/StoreProvider";
import { getProfileName } from "./getProfileName";

describe("getProfileName test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    name: "maxoni",
                },
            },
        };
        expect(getProfileName(state as StateSchema)).toEqual("maxoni");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileName(state as StateSchema)).toEqual("");
    });
});
