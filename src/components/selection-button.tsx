import { useSelector } from 'react-redux';
import Button from './atoms/button/button';
import Text from './atoms/text/text';

const SelectionButton = () => {
    const seatData = useSelector(
        (state: any) => state.locationReducer.selectedData[0].selectedSeat
    );

    const display = (item: any) => {
        let container: any[] = [];
        for (let i = 1; i < seatData.max + 1; i++) {
            let buttonComponent = (
                <Button key={i} label="" location="/selection-cinema" />
            );
            item.map((seat: any, index: number) => {
                if (i === seat.col) {
                    buttonComponent = (
                        <Button
                            key={i}
                            label={seat.col}
                            location="/selection-cinema"
                        />
                    );
                }
            });
            container.push(buttonComponent);
        }
        return container;
    };

    return (
        <div className="selection-button">
            {seatData.seat.map((item: any, seatIndex: number) => (
                <div className="selection-button-row">
                    <Text label={item.seat} />
                    <div className="selection-button-col">
                        {display(item.seatdetails)}
                    </div>
                    <Text label={item.seat} />
                </div>
            ))}
        </div>
    );
};

export default SelectionButton;
