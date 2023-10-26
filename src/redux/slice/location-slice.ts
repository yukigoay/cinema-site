import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLocation } from '../../api/spl';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

const initialState = {
    locationList: {},
};

export const fetchLocationList = createAsyncThunk(
    'location/fetchLocationList',
    async (_, { getState }) => {
        const currentState = getState();
        const cachedData = currentState.locationReducer.locationList;

        if (Object.keys(cachedData).length > 0) {
            return cachedData;
        }
        const response = await getLocation();
        return response;
    }
);

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLocationList.fulfilled, (state, action) => {
            state.locationList = action.payload;
        });
    },
});

export const getData = () => {
    const dispatch: AppDispatch = useDispatch();

    // To fetch data:
    dispatch(fetchLocationList());
};

export default locationSlice.reducer;
