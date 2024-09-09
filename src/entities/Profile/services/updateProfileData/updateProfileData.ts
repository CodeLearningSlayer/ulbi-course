import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile, ValidateProfileError } from "../../model/types/profile";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { validateProfile } from "../validateProfile/validateProfile";

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (_, thunkAPI) => {
    const { getState } = thunkAPI;

    try {
        const formData = getProfileForm(getState());
        const profileId = formData?.id;
        const errors = validateProfile(formData);

        if (errors.length) {
            return thunkAPI.rejectWithValue(errors);
        }

        const response = await thunkAPI.extra.api.put<Profile>(
            `/profile/${profileId}`,
            formData,
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
