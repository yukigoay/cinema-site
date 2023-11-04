import { useDispatch } from 'react-redux';
import CinemaDate from './cinema-date';
import Content from './content';
import Header from './cinema-header';
import { useEffect } from 'react';
import { fetchLocationList } from '../redux/slice/location-slice';

const Layout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLocationList());
    }, []);
    return (
        <div className="layout">
            <Header />
            <CinemaDate />
            <div className="content-container">
                <Content />
            </div>
        </div>
    );
};

export default Layout;
