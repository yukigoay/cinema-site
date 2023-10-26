import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer/rootReducer'; // Import your root reducer

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
