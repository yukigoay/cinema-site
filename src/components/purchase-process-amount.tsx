import Text from './atoms/text/text';

const PurchaseProcessAmount = () => {
    return (
        <div className="purchase-process-amount">
            <div className="subtotal-amount">
                <Text label="processing fee" textTransform="capitalize" />
                <Text label="RM 1.00" />
            </div>
        </div>
    );
};

export default PurchaseProcessAmount;
