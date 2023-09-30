import { Fragment } from 'react';
// import { Button } from '../stories/Button';
import Button from './atoms/button/button';

const CinemaButton = () => {
    const methodList = [
        {
            movie: 'Hension',
            time: [
                '10.14 pm',
                '12.15 pm',
                '10.14 pm',
                '12.15 pm',
                '10.14 pm',
                '12.15 pm',
                '10.14 pm',
                '12.15 pm',
                '10.14 pm',
                '12.15 pm',
            ],
            type: ['classic', 'indulge', 'Deluxe', 'Atmos', 'Beanie'],
        },
    ];

    return (
        <div className="bottom-right-container">
            {methodList.map((item, i) => (
                <div className="movie-container">
                    <div className="movie-time">
                        {item.time.map((slot, i) => (
                            <div className="movie-time-container">
                                <Button label={slot} weight="bold"></Button>
                            </div>
                        ))}{' '}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CinemaButton;
