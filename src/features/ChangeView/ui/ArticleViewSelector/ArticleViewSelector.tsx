import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { ArticleView } from "entities/Article";
import ListIcon from "shared/assets/icons/list-view.svg";
import GridIcon from "shared/assets/icons/grid-view.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import cls from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: GridIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = ({
    className,
    view,
    onViewClick,
}: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    className={classNames("", {
                        [cls.notSelected]: viewType.view !== view,
                    })}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon className={cls.viewIcon} Svg={viewType.icon} />
                </Button>
            ))}
        </div>
    );
};
