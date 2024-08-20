import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername test", () => {
    test("should return false", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: "My big name",
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual("My big name");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
