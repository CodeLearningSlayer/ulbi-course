import { Mods, classNames } from "shared/lib/classNames/classNames";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Select } from "shared/ui/Select/Select";
import { Country, CountrySelect } from "entities/Country";
import { Currency, CurrencySelect } from "entities/Currency";
import cls from "./ProfileCard.module.scss";
import { Profile } from "../../model/types/profile";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string | number) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCountry?: (value?: Country) => void;
    readonly?: boolean;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        error,
        isLoading,
        onChangeCity,
        onChangeName,
        readonly,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
    } = props;

    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Ошибка при загрузке профиля")}
                    text={t("Повторите позже")}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt={t("Аватар")} />
                    </div>
                )}
                <Input
                    value={data?.name}
                    placeholder={t("Ваше имя")}
                    onChange={onChangeName}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t("Ваш город")}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t("Ваш возраст")}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t("Ваш юзернейм")}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t("Введите ссылку на аватар")}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
