import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export interface Profile {
    name?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    username?: string;
    avatar?: string;
    city?: string;
}

export enum ValidateProfileError {
    INCORRECT_USER_NAME = "INCORRECT USER NAME",
    INCORRECT_AGE = "INCORRECT AGE",
    INCORRECT_COUNTRY = "INCORRECT COUNTRY",
    NO_DATA = "NO DATA",
    SERVER_ERROR = "SERVER ERROR",
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError: ValidateProfileError[];
}
