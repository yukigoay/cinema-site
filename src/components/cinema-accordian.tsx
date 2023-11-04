import { useDispatch } from 'react-redux';
import Text from './atoms/text/text';
import { setData } from '../redux/slice/location-slice';


const CinemaAccordian = ({ locationData, onClick }: any) => {
    const dispatch = useDispatch();
  
    const type = 'location';
    const handleItemClick = (label: string) => {
        dispatch(setData({ label, type })); // Dispatch your message using the action
        onClick(() => {});
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
