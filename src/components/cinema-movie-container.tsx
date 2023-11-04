import CinemaMovieButton from './cinema-movie-button';
import CinemaMovieIcon from './cinema-movie-icon';
import CinemaMovieImage from './cinema-movie-image';

const CinemaMovieContainer = ({
    movie,
    movieId,
    icon,
    iconId,
    timeline,
    seatId,
}: any) => {
    return (
        <div className="cinema-movie-container">
            <div className="cinema-movie-image-container">
                <CinemaMovieImage
                    title={movie.title}
                    language={movie.language}
                />
                <div className="cinema-movie-icon-container">
                    <CinemaMovieIcon icon={icon} />
                    <div className="cinema-movie-button-container">
                        <CinemaMovieButton
                            time={timeline}
                            movieIdex={movieId}
                            expId={iconId}
                            seatId={seatId}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CinemaMovieContainer;
