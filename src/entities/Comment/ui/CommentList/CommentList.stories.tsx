import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommentList } from "./CommentList";

export default {
    title: "entities/Comment/CommentList",
    component: CommentList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: "1",
            text: "hello",
            user: {
                id: "2",
                username: "Vasya",
            },
        },
        {
            id: "2",
            text: "hello biber",
            user: {
                id: "3",
                username: "VasyaP",
            },
        },
    ],
};
Primary.decorators = [];

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    comments: [],
    isLoading: false,
};
Empty.decorators = [];
