import { classNames } from "shared/lib/classNames/classNames";
import React, { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { ArticleTextBlock } from "../../model/types/article";
import cls from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    ({ className, block }: ArticleTextBlockComponentProps) => {
        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <Text title={block.title} className={cls.title} />
                )}
                {block.paragraphs.map((paragraph) => (
                    <Text
                        className={cls.paragraph}
                        key={paragraph}
                        text={paragraph}
                    />
                ))}
            </div>
        );
    },
);
