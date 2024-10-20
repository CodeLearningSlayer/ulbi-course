import { classNames } from "shared/lib/classNames/classNames";
import React, { useCallback, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { ArticleSortField } from "entities/Article/model/types/article";
import { useTranslation } from "react-i18next";
import { SortOrder } from "shared/types";
import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { t } = useTranslation();

    const { onChangeOrder, onChangeSort, className, sort, order } = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: "asc",
                label: t("возрастанию"),
            },
            {
                value: "desc",
                label: t("убыванию"),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                label: "дате создания",
                value: ArticleSortField.CREATED,
            },
            {
                label: "названию",
                value: ArticleSortField.TITLE,
            },
            {
                label: "просмотрам",
                value: ArticleSortField.VIEWS,
            },
        ],
        [],
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                value={sort}
                label={t("Сортировать ПО")}
                options={sortFieldOptions}
                onChange={onChangeSort}
            />
            <Select
                value={order}
                label={t("По")}
                options={orderOptions}
                onChange={onChangeOrder}
            />
        </div>
    );
};
