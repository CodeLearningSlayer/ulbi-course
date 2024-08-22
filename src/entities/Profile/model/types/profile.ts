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

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
