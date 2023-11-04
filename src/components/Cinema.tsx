import CinemaMovieContainer from './cinema-movie-container';
import CinemaAccordian from './cinema-accordian';
import { useSelector } from 'react-redux';
import {  useState } from 'react';

const Cinema = () => {
    const [classNameContent, setElementClass] = useState('hidden');
    const handleClick = (classNameContent: any) => {
        if (classNameContent === 'show') {
            classNameContent = 'hidden';
        } else {
            classNameContent = 'show';
        }
        setElementClass(classNameContent);
        console.log(classNameContent);
    };
    const location = useSelector(
        (state: any) => state.locationReducer.locationList
    );

    return (
        <div className="cinema-container">
            {location &&
                location.map(({ location, hall }: any) => (
                    <div className="cinema">
                        <CinemaAccordian
                            locationData={location}
                            onClick={() => handleClick(classNameContent)}
                        />

                        {hall.map(({ movieId, expId, timeline,seatId }: any) => (
                            <div className={classNameContent}>
                                <CinemaMovieContainer
                                    movie={movieId.movie}
                                    movieId={movieId}
                                    icon={expId.experience}
                                    iconId={expId}
                                    timeline={timeline}
                                    seatId={seatId}
                                />
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
};

export default Cinema;
