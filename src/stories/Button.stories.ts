import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        radius: { control: { type: 'radio' } },
        color: { control: 'color' },
        image: {
            control: {
                type: 'select',
                options: ['assets/youtube.svg', 'assets/docs.png'],
            },
            if: { arg: 'label', truthy: false },
        },
        label: {
            control: 'text',
            if: { arg: 'image', truthy: false },
        },
        border: {
            control: 'select',
            options: ['solid', 'dotted', 'dashed', 'none'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Button',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    },
};

export const Warning: Story = {
    args: {
        primary: true,
        label: 'Delete now',
        backgroundColor: 'red',
    },
};

export const Success: Story = {
    args: {
        primary: true,
        label: 'Button',
        radius: 'round',
        backgroundColor: 'green',
        color: 'black',
    },
};

export const Image: Story = {
    args: {
        primary: true,
        radius: 'non-round',
        backgroundColor: 'green',
        color: 'black',
        image: 'assets/youtube.svg',
        border: 'dotted',
    },
};

export const Hover: Story = {
    args: {
        hover: true,
        primary: true,
        radius: 'non-round',
        backgroundColor: 'green',
        color: 'black',
    },
};
