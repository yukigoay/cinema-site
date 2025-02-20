import { useSelector } from 'react-redux';
import Button from './atoms/button';
import Text from './atoms/text/text';

const SelectionBottom = () => {
    const price = true;
    const temp = 81;
    const data = ` RM ${temp}`;
    const selectedPrice = useSelector(
        (state: any) => state.locationReducer.selectedData[0].selectedPrice
    );
    const cState = useSelector(
        (state: any) => state.locationReducer.userCurrentState
    );
    const displayTab = () => {
        switch (cState) {
            case 'selection':
                return 'Confirmation';

            case 'food':
                return 'Confirmation';
            case 'purchase':
                return selectedPrice;
        }
    };

    return (
        <div className="selection-bottom">
            {price && (
                <div className="price-amount">
                    <Text
                        label="Total"
                        textTransform="capitalize"
                        size="h2"
                        weight="light"
                    />
                    <Text
                        label={displayTab}
                        textTransform="capitalize"
                        size="h2"
                        weight="bold"
                    />
                </div>
            )}
            <Button
                label="Confirmation"
                confirmation
                location="/selection-cinema"
            />
        </div>
    );
};

export default SelectionBottom;
