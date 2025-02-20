import '@css/main.scss';
import Router from './route';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchLocationList } from './redux/slice/location-slice';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLocationList());
    }, []);
    return (
        <div className="wrapper">
            <Router />
        </div>
    );
}

export default App;
