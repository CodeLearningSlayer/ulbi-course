import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/home.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticleIcon from "shared/assets/icons/articles.svg";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: "Главная страница",
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: "О сайте",
        },
    ];

    if (userData) {
        sidebarItemList.push(
            {
                path: `${RoutePath.profile}/${userData?.id}`,
                Icon: ProfileIcon,
                text: "Профиль",
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: ArticleIcon,
                text: "Статьи",
                authOnly: true,
            },
        );
    }

    return sidebarItemList;
});
