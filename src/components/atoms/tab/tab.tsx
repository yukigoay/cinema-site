import { useState } from 'react';

type TabProps = {
    tabList: Array<{
        label: string;
    }>;
};

const Tab = ({ tabList }: TabProps) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (index: number) => {
        setSelectedTab(index); 
    };

    return (
        <div className="tab-container">
            <div className="tab-list">
                {tabList.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab-label ${index === selectedTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tab;
