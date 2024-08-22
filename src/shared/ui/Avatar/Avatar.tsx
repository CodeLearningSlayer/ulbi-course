import { classNames } from "shared/lib/classNames/classNames";
import React, { memo, useMemo } from "react";
import cls from "./Avatar.module.scss";

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo(({ className, src, alt, size }: AvatarProps) => {
    // т.к. стили - объект, чтобы избежать перерисовок, обернем в юзмемо
    const styles = useMemo<React.CSSProperties>(() => {
        return {
            width: size,
            height: size,
        };
    }, [size]);

    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            alt={alt}
        />
    );
});
