import { Mods, classNames } from "shared/lib/classNames/classNames";
import React, { ChangeEvent, memo, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOption<T extends string> {
    label: string;
    value: T;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>({
    className,
    label,
    options,
    onChange,
    value,
    readonly,
}: SelectProps<T>) => {
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
        onChange?.(e.target.value as T);
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
};
