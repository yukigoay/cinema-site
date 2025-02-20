
import DateCinema from './date';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Atoms/DateCinema',
    component: DateCinema,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        dateList: { control: 'object' },
        weekdayList: { control: 'object' },
    },
} satisfies Meta<typeof DateCinema>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        dateList: [{ date: 'nov', month: 10, weekday: '' }],
        weekdayList: ['join now', 'login'],
    },
};
