import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Input autoFocus placeholder={t("Введите юзернейм")} />
            <Input placeholder={t("Введите пароль")} />
            <Button size={ButtonSize.M} className={cls.loginBtn}>
                {t("Войти")}
            </Button>
        </form>
    );
};
