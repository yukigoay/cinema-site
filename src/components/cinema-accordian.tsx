import { setMessage } from '../redux/slice/data-slice';
import { RootState } from '../redux/type';
import { useDispatch, useSelector } from 'react-redux';
import Text from './atoms/text/text';

const CinemaAccordian = ({ locationData }: any) => {
    const dispatch = useDispatch();

    // Access the Redux store state
    const state = useSelector((state: RootState) => state.data);

    const handleItemClick = (cinema: string) => {
        dispatch(setMessage({ ...state, location: cinema })); // Dispatch your message using the action
    };

    return (
        <div className="cinema-accordian">
            <div
                className="accordian"
                onClick={() => handleItemClick(locationData)}
            >
                <div className="accordian-text-container">
                    <Text
                        label={locationData}
                        size="h2"
                        weight="bold"
                        textTransform="capitalize"
                    ></Text>
                </div>
                {/* <div className="accordian-img-container">
                        {cinema.type.map((index, i) => (
                            <div key={i} className="icon-cinema">
                                <Image imgpath={index.imgpath}></Image>
                            </div>
                        ))}
                    </div> */}

                <div className="accordian-icon-container">
                    <p> +</p>
                </div>
            </div>
        </div>
    );
};

export default CinemaAccordian;
