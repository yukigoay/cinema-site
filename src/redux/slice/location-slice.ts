import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLocation } from '../../spl';

const initialState = {
    locationList: [],
    selectedData: {
        selectedTime: '',
        selectedDate: '',
        selectedState: '',
        selectedLocation: '',
        selectedMovie: {},

        selectedHall: {},

        selectedSeat: [],
        selectedFood: 0,
        selectedPrice: 0,
    },
    userCurrentState: 1,
    seatData: [],
    status: 'idle', // Possible values: 'idle', 'loading', 'succeeded', 'failed'
    error: null,
};

export const fetchLocationList = createAsyncThunk(
    'location/fetchLocationList',
    async (_, { getState }) => {
        const currentState: any = getState();
        const cachedData = currentState.locationReducer.locationList; // Use "location" instead of "locationReducer"
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
            switch (action.payload.type) {
                case 'price':
                    state.selectedData.selectedPrice =
                        action.payload.anotherInfo.price;
                    state.userCurrentState =
                        action.payload.anotherInfo.userState;
                    break;
            }
            if (action.payload.anotherInfo) {
                if (action.payload.anotherInfo?.seatname) {
                }
                if (action.payload.anotherInfo.userState) {
                    state.userCurrentState =
                        action.payload.anotherInfo.userState;
                }
            }

            // Update the state based on the action's payload
        },
        setLocation: (state, action) => {
            state.selectedData.selectedLocation = action.payload;
        },
        setSelectedState: (state, action) => {
            state.selectedData.selectedState = action.payload;
        },
        setSelectedTime: (state, action) => {
            state.selectedData.selectedTime = action.payload;
        },
        setSelectedMovieInfo: (state, action) => {
            state.selectedData.selectedMovie = action.payload.movie;
            state.selectedData.selectedHall = action.payload.experience;
            state.seatData = action.payload.seat;
        },
        setSelectedSeat: (state, action) => {
            state.selectedData.selectedSeat = action.payload;
        },
        setUserState: (state) => {
            state.userCurrentState = state.userCurrentState + 1;
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
export const {
    setData,
    setLocation,
    setSelectedState,
    setSelectedTime,
    setSelectedMovieInfo,
    setSelectedSeat,
    setUserState,
    removeData,
} = locationSlice.actions;
export default locationSlice.reducer;
