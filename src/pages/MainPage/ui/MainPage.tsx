import BugButton from "app/providers/ErrorBoundary/ui/BugButton";
import { Counter } from "entities/Counter";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t("Главная страница")}
            <BugButton />
            <Counter />
        </div>
    );
};

export default MainPage;
