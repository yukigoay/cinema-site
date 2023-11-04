import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@css', replacement: path.resolve(__dirname, 'src/css') },
            {
                find: '@components',
                replacement: path.resolve(__dirname, 'src/components/atoms'),
            },
            {
                find: '@assets',
                replacement: path.resolve(__dirname, 'src/assets'),
            },
            {
                find: '@stories',
                replacement: path.resolve(__dirname, 'src/stories'),
            },
            {
                find: '@api',
                replacement: path.resolve(__dirname, './api'),
            },
        ],
    },
});
