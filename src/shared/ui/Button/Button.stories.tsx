import React from "react";
import {
    ComponentStory,
    ComponentMeta,
    ComponentStoryObj,
} from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ButtonSize, ThemeButton } from "./Button";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "TEST PRIMARY",
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Clear = Template.bind({});
Clear.args = {
    children: "TEST Clear",
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: "test outline",
    theme: ThemeButton.OUTLINE,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: "test outline",
    size: ButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: "test outline",
    size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: "test outline",
    size: ButtonSize.XL,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: "test outline",
    theme: ThemeButton.BACKGROUND,
};

export const InvertedBackgroundTheme = Template.bind({});
InvertedBackgroundTheme.args = {
    children: "test outline",
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const SquareButton = Template.bind({});
SquareButton.args = {
    children: "test",
    square: true,
};

export const SquareButtonL = Template.bind({});
SquareButton.args = {
    children: "test",
    square: true,
    size: ButtonSize.L,
};

export const SquareButtonM = Template.bind({});
SquareButton.args = {
    children: "test",
    square: true,
    size: ButtonSize.M,
};

export const SquareButtonXL = Template.bind({});
SquareButton.args = {
    children: "test",
    square: true,
    size: ButtonSize.XL,
};
