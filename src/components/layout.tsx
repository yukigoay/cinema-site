import CinemaDate from './cinema-date';
import Cinema from './cinema1';
import Header from './cinema-header';

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <CinemaDate />
            <div className="content-container">
                <div className="content ">
                    <Cinema />
                </div>
            </div>
        </div>
    );
};

export default Layout;
