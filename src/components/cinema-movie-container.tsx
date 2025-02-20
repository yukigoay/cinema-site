import { useDispatch, useSelector } from 'react-redux';
import CinemaMovieButton from './cinema-movie-button';
import CinemaMovieImage from './cinema-movie-image';
import { useEffect, useState } from 'react';

const CinemaMovieContainer = ({}: any) => {
    const { locationList, selectedData } = useSelector(
        (state: any) => state.locationReducer
    );
    const { selectedState, selectedLocation } = selectedData;
    const [cinemaMovieContent, setCinemaMovieContent] = useState([]);
    useEffect(() => {
        if (!selectedState || !selectedLocation) return;

        const selectedStateData = locationList.find(
            ({ state }: any) => state === selectedState
        );

        if (!selectedStateData) return;
        const selectedLocationData = selectedStateData.locations.find(
            ({ location }: any) => location === selectedLocation
        );

        if (selectedLocationData) {
            setCinemaMovieContent(selectedLocationData.hallList);
        }
    }, [selectedState, selectedLocation]); // Add dependencies here
    return (
        <div className="cinema-movie-container">
            {cinemaMovieContent?.map(({ hall }) => {
                const { movieId, expId, seatId, timeline } = hall;
                const { title, language, duration } =
                    (movieId as any)?.movie || {};
                return (
                    <div className="cinema-movie-image-container" key={title}>
                        <CinemaMovieImage
                            title={title}
                            language={language}
                            duration={duration}
                        />
                        <div className="cinema-movie-icon-container">
                            {/* <CinemaMovieIcon icon={icon} /> */}
                            <div className="cinema-movie-button-container">
                                <CinemaMovieButton
                                    time={timeline}
                                    movieIdex={movieId}
                                    expId={expId}
                                    seatId={seatId}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CinemaMovieContainer;
