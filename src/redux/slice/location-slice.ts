import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLocation } from '../../spl';

const initialState = {
    locationList: [],
    selectedData: [
        {
            selectedTime: '',
            selectedMovie: {},
            selectedDate: '',
            selectedHall: [],
            selectedLocation: '',
            selectedSeat: [],
        },
    ],
    status: 'idle', // Possible values: 'idle', 'loading', 'succeeded', 'failed'
    error: null,
};

export const fetchLocationList = createAsyncThunk(
    'location/fetchLocationList',
    async (_, { getState }) => {
        const currentState: any = getState();
        const cachedData = currentState.locationReducer.locationList; // Use "location" instead of "locationReducer"
        console.log(cachedData);
        if (Object.keys(cachedData).length > 0) {
            return { location_list: cachedData };
        }
        const response = await getLocation();
        return response;
    }
);

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setData: (state, action) => {
            if (action.payload.anotherInfo) {
                state.selectedData[0].selectedMovie =
                    action.payload.anotherInfo.movie;
                state.selectedData[0].selectedHall =
                    action.payload.anotherInfo.experience;
                state.selectedData[0].selectedSeat =
                    action.payload.anotherInfo.seat;
            }

            switch (action.payload.type) {
                case 'time':
                    state.selectedData[0].selectedTime = action.payload.label;
                    break;
                case 'date':
                    state.selectedData[0].selectedDate = action.payload.label;
                    break;
                case 'location':
                    state.selectedData[0].selectedLocation =
                        action.payload.label;
                    break;
            }

            // Update the state based on the action's payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLocationList.fulfilled, (state, action) => {
            state.locationList = action.payload;
            state.status = 'succeeded'; // Set the status to 'succeeded'
        });
        builder.addCase(fetchLocationList.pending, (state) => {
            state.status = 'loading'; // Set the status to 'loading'
        });
        builder.addCase(fetchLocationList.rejected, (state: any, action) => {
            state.status = 'failed'; // Set the status to 'failed'
            state.error = action.error.message;
        });
    },
});
export const { setData } = locationSlice.actions;
export default locationSlice.reducer;
