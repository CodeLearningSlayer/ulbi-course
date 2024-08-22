import { classNames } from "shared/lib/classNames/classNames";
import React, { memo, useCallback } from "react";
import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value?: Currency) => void;
    readonly?: boolean;
}

const options = [
    {
        label: Currency.RUB,
        value: Currency.RUB,
    },
    {
        label: Currency.EUR,
        value: Currency.EUR,
    },
    {
        label: Currency.USD,
        value: Currency.USD,
    },
];

export const CurrencySelect = memo(
    ({ value, onChange, className, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );

        return (
            <Select
                className={classNames("", {}, [className])}
                value={value}
                label={t("Укажите валюту")}
                options={options}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );
    },
);
