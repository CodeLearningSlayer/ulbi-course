import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { Comment } from "entities/Comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton/Skeleton";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = ({
    className,
    comment,
    isLoading,
}: CommentCardProps) => {
    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" />
                    <Skeleton
                        className={cls.username}
                        width={100}
                        height={16}
                    />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}/${comment.user.id}`}>
                <div className={cls.header}>
                    {comment.user.avatar && (
                        <Avatar size={30} src={comment.user.avatar} />
                    )}
                    <Text
                        className={cls.username}
                        title={comment.user.username}
                    />
                </div>
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
};
