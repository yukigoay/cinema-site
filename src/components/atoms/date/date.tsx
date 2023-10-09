import styles from './date.module.scss';
import { Link } from 'react-router-dom';
import Text from '../text/text';
import { Key } from 'react';

type DateProps = {
    dateList?: Array<{ weekday: string; date: any; month: any }>;
    weekdayList?: Array<string>;
    /**
     * Optional click handler
     */
    location?: string;
    onClick?: () => void;
};

const DateCinema = ({
    dateList = [],

    weekdayList = [],
}: DateProps) => {
    return (
        <div className={`${styles.moviedateContainer}`}>
            <div className={`${styles.dateContainer}`}>
                {dateList.map((item, index) => (
                    <div key={index} className={`${styles.dateWrapper}`}>
                        <div className={`${styles.weekday}`}>
                            <Text
                                label={item.weekday.slice(0, 3)}
                                weight="bold"
                                size="h3"
                                textTransform="uppercase"
                            />
                        </div>
                        <div className={`${styles.lowerContainer}`}>
                            <Text label={item.date} weight="light" size="h2" />
                            <Text label={item.month} weight="light" size="h2" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DateCinema;
