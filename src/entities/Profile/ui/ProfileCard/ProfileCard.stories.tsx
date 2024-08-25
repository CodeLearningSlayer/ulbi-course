import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/img/storybook-avatar.jpg";
import { ProfileCard } from "./ProfileCard";

export default {
    title: "entities/ui/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: "MaxIn",
        age: 21,
        city: "Moscow",
        country: Country.RU,
        currency: Currency.RUB,
        name: "Max",
        avatar,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: "Some error",
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
