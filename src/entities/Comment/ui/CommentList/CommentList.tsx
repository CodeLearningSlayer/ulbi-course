import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { t } from "i18next";
import { Text } from "shared/ui/Text/Text";
import { Comment } from "entities/Comment";
import cls from "./CommentList.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({
    className,
    comments,
    isLoading,
}: CommentListProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard className={cls.comment} isLoading />
                <CommentCard className={cls.comment} isLoading />
                <CommentCard className={cls.comment} isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? (
                comments?.map((comment) => (
                    <CommentCard
                        className={cls.comment}
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text text={t("No comments")} />
            )}
        </div>
    );
};
