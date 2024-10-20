import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticlesPageFilters } from "./ArticlesPageFilter";

export default {
    title: "shared/ArticlesPageFilter",
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
    <ArticlesPageFilters {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
