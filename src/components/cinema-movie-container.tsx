import { useSelector } from 'react-redux';
import { RootState } from '../redux/type';
import CinemaMovieButton from './cinema-movie-button';
import CinemaMovieIcon from './cinema-movie-icon';
import CinemaMovieImage from './cinema-movie-image';

const CinemaMovieContainer = () => {
    const { cinemaData, expData, locationData } = useSelector(
        (state: RootState) => state.mongo
    );
    return (
        <div className="cinema-movie-container">
            {cinemaData?.length &&
                cinemaData.map(
                    ({ title, language, location }: any, index: any) => {
                        return (
                            <div
                                className="cinema-movie-image-container"
                                key={index}
                            >
                                <CinemaMovieImage
                                    src=""
                                    title={title}
                                    language={language}
                                />
                                <div className="cinema-movie-icon-container">
                                    <CinemaMovieIcon
                                        iconTitle={location?.[0]?.type}
                                        exp={expData}
                                    />
                                    <div className="cinema-movie-button-container">
                                        <CinemaMovieButton
                                            time={location?.[0]?.time}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )}
        </div>
    );
};

export default CinemaMovieContainer;
