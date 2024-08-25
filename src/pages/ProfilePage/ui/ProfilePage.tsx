import { classNames } from "shared/lib/classNames/classNames";
import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    ProfileCard,
    fetchProfileData,
    profileReducer,
    getProfileError,
    getProfileIsLoading,
    profileActions,
    getProfileReadonly,
    getProfileForm,
    getProfileValidateErrors,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Currency } from "entities/Currency";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Country } from "entities/Country";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t("Ошибка сервера"),
        [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
        [ValidateProfileError.INCORRECT_USER_NAME]: t("Некорректный юзернейм"),
        [ValidateProfileError.NO_DATA]: t("Нет информации"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректная страна"),
    };

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeName = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    name: value || "",
                }),
            );
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    city: value || "",
                }),
            );
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: number | string) => {
            if (
                typeof value === "string" &&
                /^\d{0,}$/.test(value.toString())
            ) {
                dispatch(
                    profileActions.updateProfile({
                        age: Number(value ?? 0),
                    }),
                );
            }
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    username: value || "",
                }),
            );
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    avatar: value || "",
                }),
            );
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(
                profileActions.updateProfile({
                    currency: value,
                }),
            );
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (value?: Country) => {
            dispatch(
                profileActions.updateProfile({
                    country: value,
                }),
            );
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames("", {}, [className ?? ""])}>
                <ProfilePageHeader />
                {Boolean(validateErrors?.length) &&
                    validateErrors?.map((error) => (
                        <Text
                            theme={TextTheme.ERROR}
                            key={error}
                            text={validateErrorTranslates[error]}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeName={onChangeName}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
