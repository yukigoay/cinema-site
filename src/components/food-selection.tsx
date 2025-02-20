import Text from './atoms/text/text';
import Image from './atoms/image/image';
import Button from './atoms/button/button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setData } from '../redux/slice/location-slice';

const FoodSelection = () => {
    const [foodState, setFoodState] = useState(0);
    const dispatch = useDispatch();

    const newData = {
        label: 'purchase',
        type: 'state',
    };

    useEffect(() => {
        dispatch(setData(newData));
    }, [foodState, dispatch]); // Ensure dispatch is included in the dependencies array

    const decreaseFoodState = () => {
        if (foodState > 0) {
            setFoodState((prevState) => prevState - 1); // Decrease the foodstate by 1
        }
    };

    const increaseFoodState = () => {
        setFoodState((foodState) => foodState + 1); // Increase the foodstate by 1
    };

    return (
        <div className="beverage-selection">
            <Text label="Food & beverages" textTransform="capitalize" />
            <div>
                <Image imgpath="/assets/f&b.jpg" />
            </div>
            <Button
                label="-"
                onClick={decreaseFoodState}
            />
            
            <Text label={foodState.toString()} />{' '}
            {/* Display the foodstate value */}
            <Button label="+" onClick={increaseFoodState} />{' '}
            {/* Use increaseFoodState function */}
        </div>
    );
};

export default FoodSelection;
const popUp = () => {
    const newData = {
        label: 'purchase',
        type: 'state',
    };
    return (
        <div className="pop-confirmation">
            <Image imgpath="/assets/f&b.jpg" />
            <div>
                <Text label="Royale Popcorn" textTransform="capitalize" />
            </div>
            <div>
                <Text label="Royale Popcorn" textTransform="capitalize" />
            </div>
            <div>
                <Text label="RM 17" textTransform="uppercase" />
                <Button location="/selection-cinema" />
            </div>
        </div>
    );
};
