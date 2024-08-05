import React from "react";
import {
    ComponentStory,
    ComponentMeta,
    ComponentStoryObj,
} from "@storybook/react";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
    title: "ui/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
