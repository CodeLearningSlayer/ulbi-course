import { Profile, ValidateProfileError } from "../../model/types/profile";

export const validateProfile = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const { age, name, country } = profile;

    const errors: ValidateProfileError[] = [];

    if (!name) {
        errors.push(ValidateProfileError.INCORRECT_USER_NAME);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
