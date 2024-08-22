import { Select } from "shared/ui/Select/Select";
import { classNames } from "shared/lib/classNames/classNames";
import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value?: Country) => void;
    readonly?: boolean;
}

const options = [
    {
        label: Country.RU,
        value: Country.RU,
    },
    {
        label: Country.KZ,
        value: Country.KZ,
    },
    {
        label: Country.BR,
        value: Country.BR,
    },
];

export const CountrySelect = memo(
    ({ value, onChange, className, readonly }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        return (
            <Select
                className={classNames("", {}, [className])}
                value={value}
                label={t("Укажите страну")}
                options={options}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );
    },
);
