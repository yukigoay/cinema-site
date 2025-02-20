import { useDispatch, useSelector } from 'react-redux';
import Text from './atoms/text/text';
import { setData } from '../redux/slice/location-slice';
export const classic: number = 18;
const PurchaseSeat = () => {
    const price = useSelector(
        (state: any) => state.locationReducer.selectedData[0].selectedPrice
    );

    const num = useSelector(
        (state: any) => state.locationReducer.selectedData[0].selectedSeat
    );

    return (
        <div className="purchase-seat">
            <div className="purchase-title">
                <Text
                    label="Tickets"
                    textTransform="uppercase"
                    weight="bold"
                    size="h3"
                />
            </div>
            <div className="purchase-seat-details">
                <Text label="Classic" textTransform="capitalize" />
                <Text
                    label={`RM ${classic.toFixed(2)} x ${num.length}`}
                    textTransform="uppercase"
                />
                <Text
                    label={`RM ${classic.toFixed(2)}`}
                    textTransform="uppercase"
                />
            </div>
            <div className="subtotal-amount">
                <Text label="Sub Total" textTransform="capitalize" />
                <Text
                    label={`RM ${price.toFixed(2)}`}
                    textTransform="capitalize"
                />
            </div>
        </div>
    );
};

export default PurchaseSeat;

export const calPrice = (price: number, num: number, type: string) => {
    if (type === 'seat') {
        return (price = classic * num);
    } else if (type === 'amount') {
        return (price = price + num);
    }else return;
};
