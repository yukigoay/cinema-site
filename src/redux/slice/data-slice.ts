// dataSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
    message: string;
    date: any;
    month: any;
    weekday: any;
    location: string;
    year: string;
    counter: number;
}

const initialState: DataState = {
    message: '',
    date: '',
    month: '',
    weekday: '',
    location: '',
    year: '2023',
    counter: 0,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setMessage: (
            state,
            action: PayloadAction<{
                message: string;
                date: string;
                location: string;
                month: string;
                weekday: string;
                year: string;
            }>
        ) => {
            const { message, date, location, month, weekday, year } =
                action.payload;
            state.message = message;
            state.date = date;
            state.month = month;
            state.location = location;
            state.weekday = weekday;
            state.year = year;
        },
        increment: (state) => {
            state.counter += 1;
        },
    },
});

export const { setMessage, increment } = dataSlice.actions;
export default dataSlice.reducer;
