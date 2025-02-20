import Button from './atoms/button/button';
import {
    setSelectedTime,
    setSelectedMovieInfo,
} from '../redux/slice/location-slice';
import { useDispatch } from 'react-redux';

const CinemaMovieButton = ({ time, movieIdex, expId, seatId }: any) => {
    const timeDisplay = checktime(time);
    const dispatch = useDispatch();


    const data = {
        movie: movieIdex.movie,
        experience: expId.experience,
        seat: seatId.seat,
        userState: 'selection',
    };
    const handleClick = (time: any) => {
        dispatch(setSelectedTime(time));
        dispatch(setSelectedMovieInfo(data));
    };
    return (
        <div className="cinema-movie-button">
            {timeDisplay?.length &&
                timeDisplay.map((item: any) => (
                    <div className="button" key={item}>
                        <Button
                            label={item}
                            weight="bold"
                            type="time"
                            location="/selection-cinema"
                            onClick={() => handleClick(item)}
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
