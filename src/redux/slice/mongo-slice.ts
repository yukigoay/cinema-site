// dataSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { cinemaDataUrl, expDataUrl, locationDataUrl } from '../config';

// Define a generic async thunk creator function
function createDataAsyncThunk<T>(
    name: string,
    url: string,
    errorMessage: string
) {
    return createAsyncThunk<T, void>(`data/${name}`, async (_, thunkAPI) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${name}`);
            }
            return response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(errorMessage);
        }
    });
}

// Usage: Create async thunks for each specific data
export const fetchExpData = createDataAsyncThunk(
    'expData',
    expDataUrl,
    'Failed to fetch expData'
);
export const fetchCinemaData = createDataAsyncThunk(
    'cinemaData',
    cinemaDataUrl,
    'Failed to fetch cinemaData'
);
export const fetchLocationData = createDataAsyncThunk(
    'locationData',
    locationDataUrl,
    'Failed to fetch locationData'
);

const mongoSlice = createSlice({
    name: 'mongo',
    initialState: {
        expData: {},
        cinemaData: {},
        locationData: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExpData.fulfilled, (state: any, action) => {
                state.expData = action.payload;
            })
            .addCase(fetchCinemaData.fulfilled, (state: any, action) => {
                state.cinemaData = action.payload;
            })
            .addCase(fetchLocationData.fulfilled, (state: any, action) => {
                state.locationData = action.payload;
            });
    },
});

export default mongoSlice.reducer;
