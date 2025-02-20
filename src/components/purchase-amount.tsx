import { useSelector } from 'react-redux';
import Text from './atoms/text/text';
import { calPrice } from './purchase-seat';
import Button from './atoms/button';

const PurchaseAmount = () => {
    const price = useSelector(
        (state: any) => state.locationReducer.selectedData[0].selectedPrice
    );
    const fee = 1;
    const total = calPrice(price, fee, 'amount');
    const data = {
        userState: 'confirmation',
    };
    if (typeof total === 'undefined') {
        return null;
    }

    return (
        <>
            <div className="purchase-amount">
                <div className="subtotal-amount">
                    <Text label="total" textTransform="capitalize" />
                    <Text label={`RM ${total.toFixed(2)}`} />
                </div>
                <Button
                    label={total.toFixed(2)}
                    type="price"
                    anotherInfo={data}
                    location="/selection-cinema"
                />
            </div>
        </>
    );
};

export default PurchaseAmount;
