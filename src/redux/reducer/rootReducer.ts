// rootReducer.ts
import { combineReducers } from 'redux';
import dataReducer from '../slice/data-slice'; // Import your data reducer
import locationReducer from '../slice/location-slice';
import mongoReducer from '../slice/mongo-slice';
const rootReducer = combineReducers({
    data: dataReducer,
    location: locationReducer,
    mongo: mongoReducer,
    // Add other reducers here
});

export default rootReducer;
