import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommentCard } from "./CommentCard";

export default {
    title: "entities/Comment/CommentCard",
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: "1",
        text: "hello",
        user: {
            id: "2",
            username: "Vasya",
        },
    },
};
Normal.decorators = [];

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: "1",
        text: "hello",
        user: {
            id: "2",
            username: "Vasya",
        },
    },
    isLoading: true,
};
Loading.decorators = [];