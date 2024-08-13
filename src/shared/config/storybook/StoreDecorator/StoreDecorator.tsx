import { DeepPartial } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import "app/styles/index.scss";

export const StoreDecorator =
    (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
        return (
            <StoreProvider initialState={initialState}>
                <StoryComponent />
            </StoreProvider>
        );
    };
