import React from "react";
import {
    ComponentStory,
    ComponentMeta,
    ComponentStoryObj,
} from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextSize, TextTheme } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TitleOnly = Template.bind({});
TitleOnly.args = {
    title: "Text",
};
TitleOnly.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TextOnly = Template.bind({});
TextOnly.args = {
    text: "Text",
};
TextOnly.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TitleAndText = Template.bind({});
TitleAndText.args = {
    text: "Text",
    title: "Title",
};
TitleAndText.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TitleOnlyDark = Template.bind({});
TitleOnlyDark.args = {
    title: "Text",
};
TitleOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextOnlyDark = Template.bind({});
TextOnlyDark.args = {
    text: "Text",
};
TextOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleAndTextDark = Template.bind({});
TitleAndTextDark.args = {
    text: "Text",
    title: "Title",
};
TitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleAndTextError = Template.bind({});
TitleAndTextError.args = {
    text: "Text",
    title: "Title",
    theme: TextTheme.ERROR,
};
TitleAndTextError.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TitleAndTextDarkError = Template.bind({});
TitleAndTextDarkError.args = {
    text: "Text",
    title: "Title",
    theme: TextTheme.ERROR,
};
TitleAndTextDarkError.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: "Title",
    text: "Text",
    size: TextSize.L,
};
