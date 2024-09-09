import { classNames } from "shared/lib/classNames/classNames";
import React, { useCallback } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation("profile");

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onEditClick = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveClick = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={cls.header}>
            <Text title={t("Профиль")} />
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readonly ? (
                        <Button
                            className={cls.editBtn}
                            theme={ThemeButton.OUTLINE}
                            onClick={onEditClick}
                        >
                            {t("Редактировать")}
                        </Button>
                    ) : (
                        <div className={cls.buttonsGroup}>
                            <Button
                                className={cls.cancelBtn}
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t("Отменить")}
                            </Button>
                            <Button
                                className={cls.saveBtn}
                                theme={ThemeButton.OUTLINE}
                                onClick={onSaveClick}
                            >
                                {t("Сохранить")}
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
