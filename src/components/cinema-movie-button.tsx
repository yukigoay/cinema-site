import Button from './atoms/button/button';

const CinemaMovieButton = ({ time, movieIdex, expId, seatId }: any) => {
    const timeDisplay = checktime(time);
    const movie = movieIdex.movie;
    const experience = expId.experience;
    const seat = seatId.seat;
    const dataDetails = { movie, experience, seat };
    return (
        <div className="cinema-movie-button">
            {timeDisplay?.length &&
                timeDisplay.map((item: any) => (
                    <div className="button">
                        <Button
                            label={item}
                            weight="bold"
                            location="/selection-cinema"
                            type="time"
                            anotherInfo={dataDetails}
                        ></Button>
                    </div>
                ))}
        </div>
    );
};

export default CinemaMovieButton;

const checktime = (time: string[]) => {
    return time.map((item: any) => {
        const hour = parseInt(item.split(':')[0]);
        const min = item.split(':')[1];

        if (hour > 12) {
            return `${hour - 12}:${min} pm`;
        } else {
            return `${item} am`;
        }
    });
};
