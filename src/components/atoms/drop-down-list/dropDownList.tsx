import { useState } from 'react';

interface DropDownListProps {
    tabList: string[];
    defaultItem?: boolean;
    onClick?: (item: string) => void; // Custom onClick for item selection
    containerClass?: string; // Custom container class
    itemClass?: string; // Custom item class
}

const DropDownList: React.FC<DropDownListProps> = ({
    tabList,
    defaultItem = false,
    onClick,
    containerClass = 'drop-down-container',
    itemClass = 'drop-down-item',
}) => {
    const [selectedItem, setSelectedItem] = useState<string>(
        defaultItem && tabList.length > 0 ? tabList[0] : ''
    );

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        if (onClick) {
            onClick(item); // Trigger the passed onClick function
        }
    };

    if (tabList?.length === 0) {
        return null;
    }

    return (
        <div className={containerClass}>
            {tabList.map((item) => (
                <div
                    key={item}
                    className={`${itemClass} ${
                        selectedItem === item ? 'active' : ''
                    }`}
                    onClick={() => handleItemClick(item)} // Handle click event
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default DropDownList;
