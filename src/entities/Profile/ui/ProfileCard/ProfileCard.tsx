import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t("Профиль")} />
                <Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>
                    {t("Редактировать")}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.name} placeholder={t("Ваше имя")} />
                <Input value={data?.city} placeholder={t("Ваш город")} />
            </div>
        </div>
    );
};
