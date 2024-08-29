import { classNames } from "shared/lib/classNames/classNames";
import React, { memo, useEffect } from "react";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById/fetchArticleById";
import { useTranslation } from "react-i18next";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton/Skeleton";
import {
    getArticleDetails,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { articleDetailsReducer } from "../../model/slices/articleDetailsSlice";
import cls from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    // const isLoading = useSelector(getArticleDetailsIsLoading);
    const isLoading = true;
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetails);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    borderRadius="50%"
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t("Произошла ошибка при загрузке статьи")}
            />
        );
    } else {
        content = (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {" "}
                ARticle details
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {content}
        </DynamicModuleLoader>
    );
});
