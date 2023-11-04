import Header from './atoms/header';

const CinemaHeader = () => {
    const headerItem = [
        'Showtimes',
        'cinemas',
        'Experiences',
        'promotions',
        'news',
        'eshop',
    ];
    const loginItem = ['join now', 'sign in '];

    return (
        <div className="cinema-header-container">
            <Header
                headerpath="/assets/header/tgv.png"
                menuList={headerItem}
                loginList={loginItem}
                clubpath="/assets/header/movie-club-header-icon.png"
            ></Header>
        </div>
    );
};

export default CinemaHeader;
