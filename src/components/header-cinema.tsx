import Header from './atoms/header/header';
import DateCinema from './atoms/date/date';
const HeaderCinema = () => {
    const headerItem = [
        'Showtimes',
        'cinemas',
        'Experiences',
        'promotions',
        'news',
        'eshop',
    ];
    const loginItem = ['join now', 'sign in '];
    const weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const d = [
        {
            date: '10-',
            month: 'Oct',
            weekday: 'Sunday',
        },
        {
            date: '11-',
            month: 'Oct',
            weekday: 'Monday',
        },
        {
            date: '12-',
            month: 'Oct',
            weekday: 'Tuesday',
        },
        {
            date: '13-',
            month: 'Oct',
            weekday: 'Wednesday',
        },
        {
            date: '14-',
            month: 'Oct',
            weekday: 'thursday',
        },
    ];
    return (
        <div className="header-container">
            <div className="header-1-container">
                <Header
                    headerpath="/assets/header/tgv.png"
                    menuList={headerItem}
                    loginList={loginItem}
                    clubpath="/assets/header/movie-club-header-icon.png"
                ></Header>
            </div>
            <div className="header-2-container">
                <DateCinema dateList={d} ></DateCinema>
            </div>
        </div>
    );
};

export default HeaderCinema;
