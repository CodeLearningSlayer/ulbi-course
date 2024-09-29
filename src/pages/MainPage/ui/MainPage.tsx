import BugButton from "app/providers/ErrorBoundary/ui/BugButton";
import { Counter } from "entities/Counter";
import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t("Главная страница")}
            <BugButton />
            <Counter />
        </Page>
    );
};

export default MainPage;
