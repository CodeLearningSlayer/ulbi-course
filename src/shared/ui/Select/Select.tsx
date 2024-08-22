import { Mods, classNames } from "shared/lib/classNames/classNames";
import React, { ChangeEvent, memo, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo(
    ({ className, label, options, onChange, value, readonly }: SelectProps) => {
        const mods: Mods = {};

        const optionList = useMemo(() => {
            return options?.map((option) => (
                <option
                    value={option.value}
                    className={cls.option}
                    key={option.value}
                >
                    {option.label}
                </option>
            ));
        }, [options]);

        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e.target.value);
        };

        return (
            <div className={classNames(cls.Wrapper, mods, [className])}>
                {label && <span className={cls.label}>{`${label}>`}</span>}
                <select
                    value={value}
                    className={cls.select}
                    onChange={onChangeHandler}
                    disabled={readonly}
                >
                    {optionList}
                </select>
            </div>
        );
    },
);
