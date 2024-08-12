import { DeepPartial } from "@reduxjs/toolkit";
import { counterReducer, counterActions } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice test", () => {
    test("counter test", () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(
            counterReducer(state as CounterSchema, counterActions.decrement()),
        ).toEqual({ value: 9 });
    });

    test("counter test", () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(
            counterReducer(state as CounterSchema, counterActions.increment()),
        ).toEqual({ value: 11 });
    });

    test("counter test", () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
