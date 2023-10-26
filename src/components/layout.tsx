import { useDispatch, useSelector } from 'react-redux';
import CinemaDate from './cinema-date';
import Content from './content';
import Header from './cinema-header';

import { getData } from './utils';

const Layout = () => {
    getData();

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
