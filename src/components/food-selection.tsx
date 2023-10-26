import Text from './atoms/text/text';
import Image from './atoms/image/image';

const FoodSelection = () => {
    return (
        <div className="beverage-selection">
            <Text label="Food & beverages" textTransform="capitalize" />
            <Image imgpath="/assets/f&b.jpg" />
        </div>
    );
};

export default FoodSelection;
