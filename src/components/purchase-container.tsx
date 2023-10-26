import Text from './atoms/text/text';
import PurchaseAmount from './purchase-amount';
import PurchaseFood from './purchase-food';
import PurchaseProcessAmount from './purchase-process-amount';
import PurchaseSeat from './purchase-seat';

const PurchaseContainer = () => {
    const food = true;
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
