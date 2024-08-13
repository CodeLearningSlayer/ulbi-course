import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { LoginForm } from "./LoginForm";

export default {
    title: "features/ui/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: "TEST PRIMARY",
};
Primary.decorators = [
    StoreDecorator({
        login: {
            username: "fock it",
            password: "test123S",
        },
    }),
];

export const WithError = Template.bind({});
WithError.args = {
    children: "TEST WithError",
};
WithError.decorators = [
    StoreDecorator({
        login: {
            username: "fock it",
            password: "test123S",
            error: "you fucked up mate",
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {
    children: "TEST Loading",
};
Loading.decorators = [
    StoreDecorator({
        login: {
            username: "fock it",
            password: "test123S",
            isLoading: true,
        },
    }),
];
