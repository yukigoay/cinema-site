// rootReducer.ts
import { configureStore } from '@reduxjs/toolkit/';
import dataReducer from '../slice/data-slice'; // Import your data reducer
import locationReducer from '../slice/location-slice';

const store = configureStore({
    reducer: {
        dataReducer,
        locationReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
