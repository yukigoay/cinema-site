import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import Header from './header';

const meta = {
    title: 'Atoms/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        menuList: { control: 'object' },
        loginList: { control: 'object' },
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        headerpath: '/assets/header/movie-club-header-icon.png',
        menuList: ['movie', 'cinema'],
        loginList: ['join now', 'login'],
    },
};
