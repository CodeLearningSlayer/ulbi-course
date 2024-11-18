import { classNames } from "shared/lib/classNames/classNames";
import React, { useCallback } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getArticleDetails } from "entities/Article";
import { getCanEditArticle } from "../../../model/selectors/article";
import cls from "./ArticleDetailsPageHeader.module.scss";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = ({
    className,
}: ArticleDetailsPageHeaderProps) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const canEditArticle = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetails);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div
            className={classNames(cls.ArticleDetailsPageHeader, {}, [
                className,
            ])}
        >
            <Button onClick={onBackToList} theme={ThemeButton.OUTLINE}>
                {t("Назад к списку")}
            </Button>
            {canEditArticle ? (
                <Button
                    className={cls.editBtn}
                    onClick={onEditArticle}
                    theme={ThemeButton.OUTLINE}
                >
                    {t("Редактировать")}
                </Button>
            ) : null}
        </div>
    );
};
