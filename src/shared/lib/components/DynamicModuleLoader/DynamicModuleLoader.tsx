import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import {
    StateSchema,
    StateSchemaKey,
} from "app/providers/StoreProvider/config/StateSchema";
import React, { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount = true } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(([key, reducer]) => {
            const isMounted = mountedReducers[key as StateSchemaKey];
            if (!isMounted) {
                store.reducerManager.add(key as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${key} reducer` });
            }
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([key, _reducer]) => {
                    store.reducerManager.remove(key as StateSchemaKey);
                    dispatch({ type: `@REMOVE ${key} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
