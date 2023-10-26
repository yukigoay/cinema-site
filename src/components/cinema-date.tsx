import DateCinema from './atoms/date';

const CinemaDate = () => {
    const d = [
        {
            date: '10',
            month: 'Oct',
            weekday: 'Sunday',
        },
        {
            date: '11',
            month: 'Oct',
            weekday: 'Monday',
        },
        {
            date: '12',
            month: 'Oct',
            weekday: 'Tuesday',
        },
        {
            date: '13',
            month: 'Oct',
            weekday: 'Wednesday',
        },
        {
            date: '14',
            month: 'Oct',
            weekday: 'thursday',
        },
    ];

    return (
        <div className="cinema-date-container">
            <DateCinema dateList={d}></DateCinema>
        </div>
    );
};

export default CinemaDate;
