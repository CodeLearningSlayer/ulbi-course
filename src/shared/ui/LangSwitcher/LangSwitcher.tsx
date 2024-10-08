import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import React, { memo } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            className={classNames("", {}, [className])}
            theme={ThemeButton.CLEAR_INVERTED}
            onClick={toggle}
        >
            {short ? t("Короткий язык") : t("Язык")}
        </Button>
    );
});
