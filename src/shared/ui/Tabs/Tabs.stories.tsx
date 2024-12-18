import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Tabs } from "./Tabs";

export default {
    title: "shared/Tabs",
    component: Tabs,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            content: "Tab 1",
            value: "1",
        },
        {
            content: "Tab 2",
            value: "2",
        },
        {
            content: "Tab 3",
            value: "3",
        },
    ],
    value: "2",
    onTabClick: action("onTabClick"),
};
Primary.decorators = [];
