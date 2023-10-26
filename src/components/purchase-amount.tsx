import Text from './atoms/text/text';

const PurchaseAmount = () => {
    return (
        <div className="purchase-amount">
            <div className="subtotal-amount">
                <Text label="total" textTransform="capitalize" />
                <Text label="RM 20.00 " />
            </div>
        </div>
    );
};

export default PurchaseAmount;
