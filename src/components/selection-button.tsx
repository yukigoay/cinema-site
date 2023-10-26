import Button from './atoms/button/button';
import Text from './atoms/text/text';

const SelectionButton = () => {
    return (
        <div className="selection-button">
            <Text label="available showtimes" textTransform="capitalize" />
            <Button />
        </div>
    );
};

export default SelectionButton;
