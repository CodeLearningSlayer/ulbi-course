import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Eaque velit recusandae at facere officia magni architecto! Culpa nostrum quis recusandae consequatur fugit odio autem, laboriosam, aut eligendi fuga nulla beatae. Magnam nisi ad impedit quaerat, a aliquid! Velit libero commodi numquam molestiae ad ea, iste placeat, quod minima reiciendis ex assumenda amet blanditiis! Excepturi voluptate provident, repellat quaerat facere amet?",
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Eaque velit recusandae at facere officia magni architecto! Culpa nostrum quis recusandae consequatur fugit odio autem, laboriosam, aut eligendi fuga nulla beatae. Magnam nisi ad impedit quaerat, a aliquid! Velit libero commodi numquam molestiae ad ea, iste placeat, quod minima reiciendis ex assumenda amet blanditiis! Excepturi voluptate provident, repellat quaerat facere amet?",
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
