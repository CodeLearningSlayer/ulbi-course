import { classNames } from "shared/lib/classNames/classNames";
import React, { CSSProperties } from "react";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}

export const Skeleton = ({
    className,
    borderRadius,
    height,
    width,
}: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
};
