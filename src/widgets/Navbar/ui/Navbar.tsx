/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { memo, useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t("My app")}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    className={cls.createLink}
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t("Создать статью")}
                </AppLink>
                <Button
                    onClick={onLogout}
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={cls.links}
                >
                    {t("Выйти")}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
            >
                {t("Войти")}
            </Button>
            {isAuthModalOpen && (
                <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
            )}
        </header>
    );
});
