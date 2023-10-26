import styles from './date.module.scss';
import Text from '../text/text';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/type';
import { setMessage } from '../../../redux/slice/data-slice';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../redux/store';

type DateProps = {
    dateList?: Array<{ weekday: string; date: any; month: any }>;
    weekdayList?: Array<string>;
    /**
     * Optional click handler
     */
    test?: string;
    location?: string;
    onClick?: () => void;
};

const DateCinema = ({
    dateList = [],
    test,
}: DateProps) => {

    const dispatch = useDispatch();

    // Access the Redux store state
    const state = useSelector((state: RootState) => state.data);

    const handleItemClick = (item: {
        weekday: string;
        date: string;
        month: string;
    }) => {
        dispatch(
            setMessage({
                ...state,
                date: item.date,
                month: item.month,
                weekday: item.weekday,
            })
        ); // Dispatch your message using the action

        // Additional logic if necessary
    };

    return (
        // <Provider store={store}>
        //     <BrowserRouter>
                <div className={`${styles.moviedateContainer}`}>
                    <div className={`${styles.dateContainer}`}>
                        {dateList.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.dateWrapper}`}
                                onClick={() => handleItemClick(item)}
                            >
                                <div className={`${styles.weekday}`}>
                                    <Text
                                        label={item.weekday.slice(0, 3)}
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
                                        label={item.date}
                                        weight="light"
                                        size="h2"
                                    />
                                    <Text
                                        label={item.month}
                                        weight="light"
                                        size="h2"
                                    />
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
