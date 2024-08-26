import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import cls from "./[FTName].module.scss";

interface [FTName]Props {
    className?: string;
}

export const [FTName] = ({ className }: [FTName]Props) => {
    return (
        <div
            className={classNames(cls.[FTName], {}, [className])}
        >
        </div>
    );
};
