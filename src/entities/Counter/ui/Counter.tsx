import { classNames } from "shared/lib/classNames/classNames";
import React, { useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import cls from "./Counter.module.scss";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const dispatch = useDispatch();

    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div className={classNames(cls.Counter, {}, [className])}>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={increment}>
                +
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                -
            </Button>
        </div>
    );
};
