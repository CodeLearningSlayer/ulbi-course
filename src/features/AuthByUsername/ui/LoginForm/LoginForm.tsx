import { classNames } from "shared/lib/classNames/classNames";
import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../services/loginByUsername/loginByUsername";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        <DynamicModuleLoader reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
