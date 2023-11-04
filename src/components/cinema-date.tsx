import DateCinema from './atoms/date';

const CinemaDate = () => {
    const dateList = generateArray();

    return (
        <div className="cinema-date-container">
            <DateCinema dateList={dateList} type="date"></DateCinema>
        </div>
    );
};

export default CinemaDate;

const generateArray = (): string[] => {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    const thirties: number[] = [3, 5, 8, 10]; // Months with 30 days

    const daysInMonth = (month: number): number =>
        thirties.includes(month) ? 30 : 31;

    const [weekday, month, dayOfMonthStr, year] = currentDate
        .toDateString()
        .split(' ');
    let dayOfMonth = parseInt(dayOfMonthStr, 10);

    console.log(weekday, month, dayOfMonthStr, year);
    const modifiedArray: string[] = [];
    const dayOfWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let dayOfWeekIndex = dayOfWeekNames.indexOf(weekday);

    for (let i = 0; i < 8; i++) {
        if (dayOfMonth > daysInMonth(currentMonth)) {
            currentMonth++;
            dayOfMonth = 1;
        }

        const monthName = new Intl.DateTimeFormat('en', {
            month: 'short',
        }).format(new Date(2023, currentMonth, 1));
        const newDayOfWeek = dayOfWeekNames[dayOfWeekIndex];

        modifiedArray.push(
            ` ${year} ${newDayOfWeek} ${dayOfMonth} ${monthName}  `
        );

        dayOfMonth++;
        dayOfWeekIndex = (dayOfWeekIndex + 1) % 7;
    }

    return modifiedArray;
};

