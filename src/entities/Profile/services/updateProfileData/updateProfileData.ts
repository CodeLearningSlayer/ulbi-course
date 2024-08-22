import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../model/types/profile";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>("profile/updateProfileData", async (_, thunkAPI) => {
    const { getState } = thunkAPI;

    try {
        const formData = getProfileForm(getState());
        const response = await thunkAPI.extra.api.put<Profile>(
            "/profile",
            formData,
        );
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue("error");
    }
});
