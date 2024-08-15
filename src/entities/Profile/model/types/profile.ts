import { Country, Currency } from "shared/const/common";

export interface Profile {
    name: string;
    age: 21;
    currency: Currency;
    country: Country;
    username: string;
    avatar: string;
    city: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
