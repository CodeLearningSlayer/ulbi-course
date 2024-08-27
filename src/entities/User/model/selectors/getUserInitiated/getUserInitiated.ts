import { StateSchema } from "app/providers/StoreProvider";

export const getUserInitiated = (state: StateSchema) => {
    return state.user._initiated || false;
};
