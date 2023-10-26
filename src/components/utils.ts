import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCinemaData,
    fetchExpData,
    fetchLocationData,
} from '../redux/slice/mongo-slice';
import { AppDispatch, RootState } from '../redux/store';

export const fetchData = (url: RequestInfo | URL) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            Origin: 'http://localhost:3000', // Replace with the allowed origin
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error(`Error fetching data from ${url}:`, error);
            throw error; // Re-throw the error for downstream handling, if needed
        });
};

export const getData = () => {
    const dispatch: AppDispatch = useDispatch();

    // To fetch data:
    dispatch(fetchExpData());
    dispatch(fetchCinemaData());
    dispatch(fetchLocationData());
};
export const setData = () => {
    const locationData = useSelector(
        (state: RootState) => state.mongo.locationData
    );
    const expData = useSelector((state: RootState) => state.mongo.expData);
    const cinemaData = useSelector(
        (state: RootState) => state.mongo.cinemaData
    );
};
