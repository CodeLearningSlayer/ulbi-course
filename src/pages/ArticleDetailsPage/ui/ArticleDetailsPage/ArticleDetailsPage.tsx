import { classNames } from "shared/lib/classNames/classNames";
import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArticleDetails, ArticleList } from "entities/Article";
import { useParams } from "react-router-dom";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useDispatch, useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { AddCommentForm } from "features/AddNewComment";
import { Page } from "widgets/Page/Page";
import { getArticleRecommendations } from "pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice";
import { getArticleRecommendationsIsLoading } from "pages/ArticleDetailsPage/model/selectors/recommendations";
import { getArticleComments } from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArtilceRecommendations";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { articleDetailsPageReducer } from "../../model/slices";
import cls from "./ArticleDetailsPage.module.scss";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article-details");
    const comments = useSelector(getArticleComments.selectAll);
    const isCommentsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const isRecommendationsLoading = useSelector(
        getArticleRecommendationsIsLoading,
    );
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

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
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    className={cls.recommendationTitle}
                    size={TextSize.L}
                    title={t("Рекомендуем")}
                />
                <ArticleList
                    target="_blank"
                    className={cls.recommendationList}
                    articles={recommendations}
                    isLoading={isRecommendationsLoading}
                />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t("Comments")}
                />
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
