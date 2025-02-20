import styles from './date.module.scss';
import Text from '../text/text';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/type';
import { setMessage } from '../../../redux/slice/data-slice';
import { BrowserRouter } from 'react-router-dom';
import { setData } from '../../../redux/slice/location-slice';
import { useState } from 'react';

type DateProps = {
    dateList?: Array<string>;
    weekdayList?: Array<string>;
    /**
     * Optional click handler
     */
    type?: string;
    location?: string;
    onClick?: () => void;
};

const DateCinema = ({ dateList = [], type, onClick }: DateProps) => {
    const dispatch = useDispatch();
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
        null
    );
    // Access the Redux store state
    const state = useSelector((state: RootState) => state.data);
    const extractedData = dateList.map((dateStr) => {
        const parts = dateStr.trim().split(' ');
        const year = parts[0].trim();
        const dayOfWeek = parts[1].trim();
        const dayOfMonth = parts[2].trim();
        const month = parts[3].trim();

        return { dayOfWeek, dayOfMonth, month, year };
    });
    const handleClick = (label: any,index:number) => {
        label = `${label.dayOfMonth}  ${label.month} ${label.year}`;
        dispatch(setData({ label, type }));
        setSelectedItemIndex(index)
    };

    return (
        // <Provider store={store}>
        //     <BrowserRouter>
        <div className={`${styles.moviedateContainer}`}>
            <div className={`${styles.dateContainer}`}>
                {extractedData.map((item, index) => ( 
                    <div
                        key={index}
                        className={`${styles.dateWrapper} ${
                            selectedItemIndex === index
                                ? styles.selected // Apply styles for selected item here
                                : ''
                        }`}
                        onClick={() => handleClick(item,index)}
                    >
                        <div className={`${styles.weekday}`}>
                            <Text
                                label={item.dayOfWeek}
                                weight="bold"
                                size="h3"
                                textTransform="uppercase"
                            />
                        </div>
                        {/* <div>
                            <h1>{data.time}</h1>
                        </div> */}
                        <div className={`${styles.lowerContainer}`}>
                            <Text
                                label={item.dayOfMonth}
                                weight="light"
                                size="h2"
                            />
                            <Text label={item.month} weight="light" size="h2" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        //     </BrowserRouter>
        // </Provider>
    );
};

export default DateCinema;
