import { classNames } from "shared/lib/classNames/classNames";
import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { loginActions } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../services/loginByUsername/loginByUsername";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = () => {
        dispatch(loginByUsername({ username, password }));
    };

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t("Форма авторизации")} />
            {error && (
                <Text theme={TextTheme.ERROR} text={t("Error ocurred")} />
            )}
            <Input
                onChange={onChangeUsername}
                autoFocus
                placeholder={t("Введите юзернейм")}
                value={username}
            />
            <Input
                onChange={onChangePassword}
                placeholder={t("Введите пароль")}
                value={password}
            />
            <Button
                size={ButtonSize.M}
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t("Войти")}
            </Button>
        </form>
    );
});
