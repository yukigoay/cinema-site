import CinemaMovieContainer from './cinema-movie-container';
import CinemaAccordian from './cinema-accordian';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Cinema = () => {
    const [accordionStates, setAccordionStates] = useState(
        Array(100).fill(false)
    );

    const toggleAccordion = (index:number) => {
        setAccordionStates((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index]; // Toggle the state at the specified index
            return newState;
        });
    };

    const location = useSelector(
        (state: any) => state.locationReducer.locationList
    );

    return (
        <div className="cinema-container">
            {location &&
                location.map(({ location, hall }: any, index: number) => (
                    <div className="cinema" key={index}>
                        <CinemaAccordian
                            locationData={location}
                            onClick={() => toggleAccordion(index)} // Pass the index to the click handler
                        />

                        {hall.map(
                            (
                                { movieId, expId, timeline, seatId }: any,
                                movieIndex: number
                            ) => (
                                <div
                                    className={
                                        accordionStates[index]
                                            ? 'show'
                                            : 'hidden'
                                    }
                                    key={movieIndex}
                                >
                                    <CinemaMovieContainer
                                        movie={movieId.movie}
                                        movieId={movieId}
                                        icon={expId.experience}
                                        iconId={expId}
                                        timeline={timeline}
                                        seatId={seatId}
                                    />
                                </div>
                            )
                        )}
                    </div>
                ))}
        </div>
    );
};

export default Cinema;
