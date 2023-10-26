import CinemaMovieContainer from './cinema-movie-container';
import CinemaAccordian from './cinema-accordian';
import { RootState } from '../redux/type';
import { useSelector } from 'react-redux';

const Cinema = () => {
    const { cinemaData, expData, locationData } = useSelector(
        (state: RootState) => state.mongo
    );
    return (
        <div className="cinema-container">
            {locationData.map((location: any) => (
                <div className="cinema">
                    <CinemaAccordian locationData={location.location} />
                    <div className="cinema">
                        <CinemaMovieContainer />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cinema;
