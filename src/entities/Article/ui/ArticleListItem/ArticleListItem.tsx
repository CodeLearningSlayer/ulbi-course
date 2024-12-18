import { classNames } from "shared/lib/classNames/classNames";
import React, { HTMLAttributeAnchorTarget, useCallback } from "react";
import { Text } from "shared/ui/Text/Text";
import EyeIcon from "shared/assets/icons/eye.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { Card } from "shared/ui/Card/Card";
import { useHover } from "shared/lib/hooks/useHover/useHover";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from "./ArticleListItem.module.scss";
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = ({
    className,
    article,
    view,
    target,
}: ArticleListItemProps) => {
    const [isHover, bindHover] = useHover();

    const types = <Text text={article.type?.join(" ")} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    const { t } = useTranslation();

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    cls[view],
                    className,
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user?.avatar} />
                        <Text
                            text={article.user?.username}
                            className={cls.username}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            className={cls.textBlock}
                            block={textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={`${RoutePath.article_details}/${article.id}`}
                        >
                            <Button theme={ThemeButton.OUTLINE}>
                                {t("Читать далее...")}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <AppLink
            target={target}
            to={`${RoutePath.article_details}/${article.id}`}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
            {...bindHover}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
};
