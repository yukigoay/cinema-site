import CinemaButton from './cinema-button';
import CinemaIcon from './cinema-icon';
import CinemaImage from './cinema-image';
import CinemaAccordian from './cinema-accordian';

const Cinema = () => {
    // {
    //     nameCinemaa: '1 Utama',
    //     type: [
    //         { nameType: 'Classic', imgpath: '/assets/type/classic.png' },
    //         { nameType: 'Deluxe', imgpath: '/assets/type/deluxe.png' },
    //         { nameType: 'Atmos', imgpath: '/assets/type/atmos.jpg' },
    //         { nameType: 'Beanie', imgpath: '/assets/type/beanie.png' },
    //     ],
    // },

    return (
        <div className="whole-container">
            <CinemaAccordian />
            <div className="bottom-container">
                <CinemaImage />
                <div className="right-container">
                    <CinemaIcon />
                    <CinemaButton />
                </div>
            </div>
        </div>
    );
};
export default Cinema;
