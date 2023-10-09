import { Component, Fragment } from 'react';
import Button from './atoms/button/button';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

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
                <div key={i} className="movie-container">
                    <div className="movie-time">
                        {item.time.map((slot, i) => (
                            <div key={i} className="movie-time-container">
                                <Button
                                    label={slot}
                                    weight="bold"
                                    location="/header-cinema"
                                ></Button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CinemaButton;
