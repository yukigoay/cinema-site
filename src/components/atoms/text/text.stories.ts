import type { Meta, StoryObj } from '@storybook/react';
import Text from './text';

const meta = {
    title: 'Atoms/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        label: {
            control: 'text',
        },
        size: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        },
        weight: { control: { type: 'radio' } },
        textTransform: { control: { type: 'radio' } },
    },
    // decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        label: 'Heading',
    },
};

export const BoldText: Story = {
    args: {
        label: 'Bold Text',
        weight: 'bold',
    },
};
export const BoldHeading2: Story = {
    args: {
        label: 'Heading 2',
        weight: 'bold',
        size: 'h2',
    },
};

export const UppercaseText: Story = {
    args: {
        label: 'the nun ii',
        weight: 'bold',
        textTransform: 'uppercase',
    },
};

export const TextWithBackgroundcolor: Story = {
    args: {
        label: 'Black',
        weight: 'bold',
        backgroundColor: '#ff9191',
    },
};
