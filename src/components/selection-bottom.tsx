import Button from './atoms/button';
import Text from './atoms/text/text';

const SelectionBottom = () => {
    const price = true;
    const temp = 81;
    const data = ` RM ${temp}`;

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
                        label={data}
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
