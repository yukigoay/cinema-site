import { useEffect } from 'react';
import Text from './atoms/text/text';
import PurchaseAmount from './purchase-amount';
import PurchaseFood from './purchase-food';
import PurchaseProcessAmount from './purchase-process-amount';
import PurchaseSeat from './purchase-seat';
import { setData } from '../redux/slice/location-slice';
import { useDispatch, useSelector } from 'react-redux';

const PurchaseContainer = () => {
    const food = useSelector(
        (state: any) => state.locationReducer.selectedData.selectedFood
    );
    const dispatch = useDispatch();
    const newData = {
        label: 'purchase',
        type: 'state',
    };

    useEffect(() => {
        dispatch(setData(newData));
    }, []);
    return (
        <div className="purchase-container">
            <Text
                label="Purchase details"
                weight="bold"
                textTransform="capitalize"
                size="h2"
            />
            <PurchaseSeat />
            {food && <PurchaseFood />}
            <PurchaseProcessAmount />
            <PurchaseAmount />
        </div>
    );
};

export default PurchaseContainer;
