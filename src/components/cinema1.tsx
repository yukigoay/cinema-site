import CinemaStateAccordion from './cinema-state-accordion';
import CinemaMovieContainer from './cinema-movie-container';
//done
const Cinema1 = () => {
    return (
        <div className="cinema-container">
            <div className="state-container">
                <CinemaStateAccordion />
            </div>
            <div className="cinema-content-container">
                <CinemaMovieContainer />
            </div>
        </div>
    );
};

export default Cinema1;
