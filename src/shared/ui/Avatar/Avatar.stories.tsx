import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Avatar } from "./Avatar";
import testImage from "./storybook-avatar.jpg";

export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: testImage,
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Smaller = Template.bind({});
Smaller.args = {
    size: 75,
    src: testImage,
};
