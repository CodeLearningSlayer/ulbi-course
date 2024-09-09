import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../model/types/profile";

export const fetchProfileData = createAsyncThunk<
    Profile,
    string | undefined,
    ThunkConfig<string>
>("profile/fetchProfileData", async (profileId, thunkAPI) => {
    try {
        if (!profileId) {
            return thunkAPI.rejectWithValue("no arg");
        }

        const response = await thunkAPI.extra.api.get<Profile>(
            `/profile/${profileId}`,
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue("error");
    }
});
