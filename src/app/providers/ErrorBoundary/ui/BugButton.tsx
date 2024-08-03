import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const BugButton = () => {
    const [error, setError] = useState(false);

    const { t } = useTranslation();

    const onClick = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <button type="button" onClick={onClick}>
            {t("Выкинуть ошибку")}
        </button>
    );
};

export default BugButton;
