import { useDispatch, useSelector } from 'react-redux';
import Button from './atoms/button/button';
import Text from './atoms/text/text';
import { setSelectedSeat, setUserState } from '../redux/slice/location-slice';
import SVGIcon from './atoms/svg/svg';

const SelectionButton = () => {
    const dispatch = useDispatch();
    const selectedSeat = useSelector(
        (state: any) => state.locationReducer.selectedData.selectedSeat
    );
    const seatData = useSelector(
        (state: any) => state.locationReducer.seatData
    );
    const handleClick = (seat: string) => {
        if (selectedSeat.length >= 10) {
            return;
        }
        let updatedSeats;

        if (!selectedSeat.includes(seat)) {
            updatedSeats = [...selectedSeat, seat];
        } else {
            updatedSeats = selectedSeat.filter(
                (seatId: string) => seatId !== seat
            );
        }
        dispatch(setSelectedSeat(updatedSeats));
    };

    const display = (item: any) => {
        let container: any[] = [];
        for (let i = 1; i < seatData.max + 1; i++) {
            let buttonComponent = <div className="empty-seat"></div>;
            item.map((seat: any) => {
                if (i === seat.col) {
                    const isSelected = selectedSeat.includes(seat?.seatname);
                    buttonComponent = (
                        <div
                            className="seat"
                            onClick={() => handleClick(seat?.seatname)}
                        >
                            <SVGIcon
                                src={
                                    isSelected
                                        ? '/assets/movie-selected-seat.svg'
                                        : '/assets/movie-seat.svg'
                                }
                            />
                        </div>
                    );
                }
            });
            container.push(buttonComponent);
        }
        return container;
    };

    return (
        <div className="selection-button">
            {seatData.seat.map(({ seat, seatdetails }: any) => (
                <div className="selection-button-row" key={seat}>
                    <Text label={seat} />
                    <div className="selection-button-col">
                        {display(seatdetails)}
                    </div>
                    <Text label={seat} />
                </div>
            ))}
            {selectedSeat.length > 10 && <MaximumSelection />}
            <Button label="confirm" onClick={() => dispatch(setUserState())} />
        </div>
    );
};

export default SelectionButton;

const MaximumSelection = () => {
    return (
        <div className="maximum-selection-wrapper">
            <div className="maximum-selection">
                <Text label="You can only book a maximum of ten (10) seats in one transaction. Please try again." />
            </div>
        </div>
    );
};
export const classic: number = 18;
