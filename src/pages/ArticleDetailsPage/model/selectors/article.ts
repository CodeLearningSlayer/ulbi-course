import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { getArticleDetails } from "entities/Article";

export const getCanEditArticle = createSelector(
    getArticleDetails,
    getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
