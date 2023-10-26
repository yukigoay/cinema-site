import { Meta, StoryObj } from '@storybook/react';
import Process from './process';

const meta = {
    title: 'Atoms/Process',
    component: Process,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        processList: { control: 'object' },
    },
    // decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
} satisfies Meta<typeof Process>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        processList: [{ desc: 'sssss', imgsrc: 'imgsrc' }],
    },
};
