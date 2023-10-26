import { Meta, StoryObj } from '@storybook/react';
import Accordian from './accordian';

const meta = {
    title: 'Atoms/Accordian',
    component: Accordian,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: { processList: { control: 'object' } },
    // decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
} satisfies Meta<typeof Accordian>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: { label: 'heloos', processList: ['ssss', 'sssss'], imgpath: '' },
};
