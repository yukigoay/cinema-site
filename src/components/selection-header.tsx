import { useSelector } from 'react-redux';
import { RootState } from '../redux/type';
import Header from './atoms/header';

const SelectionHeader = () => {
    const data = useSelector(
        (state: any) => state.locationReducer.selectedData
    );
    let arr: string[] = [];
    // let str = `${data.date} ${data.month} ${data.year} `;
    arr.push(
        data.selectedTime.toString(),
        data.selectedDate.toString(),
        data.selectedMovie.title.toString(),
        data.selectedHall.type.toString(),
        data.selectedLocation.toString()
    );

    return (
        <div className="selection-header">
            <Header
                headerpath="/assets/header/tgv.png"
                menuList={arr}
                clubpath="/assets/selection-icon/close.png"
            ></Header>
        </div>
    );
};

export default SelectionHeader;
