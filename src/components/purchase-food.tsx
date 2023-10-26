import Text from './atoms/text/text';

const PurchaseFood = () => {
    return (
        <div className="purchase-food">
            <div className="purchase-title">
                <Text
                    label="F&B"
                    textTransform="uppercase"
                    weight="bold"
                    size="h3"
                />
            </div>
            <div className="purchase-food-details">
                <Text label="Classic" textTransform="uppercase" />
                <Text label="(RM 30.00 X 2)" textTransform="uppercase" />
                <Text label="RM 30.00" textTransform="uppercase" />
            </div>
            <div className="subtotal-amount">
                <Text label="Sub Total" textTransform="capitalize" />
                <Text label="RM 70.00" textTransform="capitalize" />
            </div>
        </div>
    );
};

export default PurchaseFood;
