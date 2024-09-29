import { classNames } from "shared/lib/classNames/classNames";
import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useDispatch, useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { AddCommentForm } from "features/AddNewComment";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Page } from "shared/ui/Page/Page";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from "../../model/slices/articleDetailsCommentsSlice";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article-details");
    const comments = useSelector(getArticleComments.selectAll);
    const isCommentsLoading = useSelector(getArticleCommentsIsLoading);
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t("Статья не найдена")}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <Button onClick={onBackToList} theme={ThemeButton.OUTLINE}>
                    {t("Назад к списку")}
                </Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t("Comments")} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isCommentsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
