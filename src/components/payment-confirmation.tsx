import { useSelector } from 'react-redux';
import Text from './atoms/text/text';
import Button from './atoms/button/button';

const PaymentConfirmation = () => {
    const selectedSeat = useSelector(
        (state: any) => state.locationReducer.selectedData[0].selectedSeat
    );

    return (
        <div>
            <div>
                <Text
                    label={`Do you Confirm Purchase ${selectedSeat.length} ticket`}
                />
            </div>
            <div>
            <Button label="Yes" location="/" />
                <Button label="No" location="/" />
            </div>
        </div>
    );
};

export default PaymentConfirmation;
