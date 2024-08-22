import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "./Select";

export default {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Options",
    options: [
        {
            value: "123",
            label: "123",
        },
        {
            value: "1234",
            label: "1234",
        },
        {
            value: "1232",
            label: "1232",
        },
    ],
};

export const WithoutLabel = Template.bind({});
