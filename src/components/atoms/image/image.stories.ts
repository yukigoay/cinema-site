import type { Meta, StoryObj } from '@storybook/react';
import Image from './image';

const meta = {
    title: 'Atoms/Image',
    component: Image,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        imgpath: {
            control: 'text',
        },
    },
    // decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        imgpath: '../assets/logo-kiki-resized.png',
        hoverpath: '../assets/logo-kiki-resized.png',
        desc: 'This is an Image ',
        title: 'Ballon',
    },
};
