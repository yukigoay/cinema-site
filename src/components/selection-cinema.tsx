import ProcessCinema from './process-cinema';
import SelectionBottom from './selection-bottom';
import SelectionButton from './selection-button';
import SelectionHeader from './selection-header';
import FoodSelection from './food-selection';
import PurchaseContainer from './purchase-container';

const SelectionCinema = () => {
    const counter = 1;
    const displayTab = () => {
        if (counter === 1) {
            return <SelectionButton />;
        } else if (counter === 2) {
            return <FoodSelection />;
        } else if (counter === 3) {
            return <PurchaseContainer />;
        }
    };

    return (
        <div className="selection-cinema">
            <SelectionHeader />
            <ProcessCinema />

            {displayTab()}
            {/* <PopupConfirmation /> */}
            <SelectionBottom />
        </div>
    );
};

export default SelectionCinema;
