import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
        },
        href: {
            control: 'text',
        },
        location: {
            control: 'text',
        },
        list: {
            control: 'object',
        },
        border: {
            control: 'select',
            options: ['solid', 'dotted', 'dashed', 'none'],
        },
        weight: { control: { type: 'radio' } },
    },
    // decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        label: 'This is atoms button',
        border: 'none',
    },
};

export const ButtonAsLink: Story = {
    args: {
        label: 'This is atoms button link',
        href: 'www.google.com',
    },
};

export const ButtonTextBold: Story = {
    args: {
        label: 'This is atoms button',
        border: 'none',
        weight: 'bold',
    },
};

export const ConfirmationButton: Story = {
    args: {
        label: 'Confirmation',
        confirmation: true,
    },
};

export const ContinueButton: Story = {
    args: {
        label: 'Continue',
        continueButton: true,
    },
};
