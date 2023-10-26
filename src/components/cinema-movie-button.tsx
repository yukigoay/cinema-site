import Button from './atoms/button/button';

const CinemaMovieButton = ({ time }: any) => {
    return (
        <div className="cinema-movie-button">
            {time?.length &&
                time.map((item: any) => (
                    <div className="cinema-movie-button-container">
                        <Button
                            label={item}
                            weight="bold"
                            location="/selection-cinema"
                        ></Button>
                    </div>
                ))}
        </div>
    );
};

export default CinemaMovieButton;
