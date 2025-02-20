import ProcessCinema from './process-cinema';
import SelectionBottom from './selection-bottom';
import SelectionButton from './selection-button';
import SelectionHeader from './selection-header';
import FoodSelection from './food-selection';
import PurchaseContainer from './purchase-container';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import PopupConfirmation2 from './popup-confirmation2';
import PaymentConfirmation from './payment-confirmation';

const SelectionCinema = () => {
    const cState = useSelector(
        (state: any) => state.locationReducer.userCurrentState
    );
    const displayTab = () => {
        switch (cState) {
            case 1:
                return <SelectionButton />;
            case 2:
                return <FoodSelection />;
            case 3:
                return <PurchaseContainer />;
            case 4:
                return <PaymentConfirmation />;
        }
    };

    return (
        <div className="selection-cinema">
            <SelectionHeader />
            <ProcessCinema />

            {displayTab()}
        </div>
    );
};

export default SelectionCinema;
