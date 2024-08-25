import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/img/storybook-avatar.jpg";
import ProfilePage from "./ProfilePage";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        profile: {
            data: {
                username: "MaxIn",
                age: 21,
                city: "Moscow",
                country: Country.RU,
                currency: Currency.RUB,
                name: "Max",
                avatar,
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            data: {
                username: "MaxIn",
                age: 21,
                city: "Moscow",
                country: Country.RU,
                currency: Currency.RUB,
                name: "Max",
                avatar,
            },
        },
    }),
];
