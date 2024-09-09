import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./Card";
import { Text } from "../Text/Text";

export default {
    title: "shared/Card",
    component: Card,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text title="test" text="text" />,
};
Primary.decorators = [];
