import { useState } from 'react';
import SVGIcon from '../svg/svg';

/**
 * Accordion component that renders collapsible tabs.
 *
 * @component
 * @param {Object[]} tabList - List of tabs to display in the accordion.
 * @param {string} tabList[].text - The text label for each tab.
 * @param {string} tabList[].tab - Unique identifier for each tab.
 * @param {string} path - Optional path for the arrow icon.
 * @param {React.ReactNode} selectedContent - The selectedContent to display when the tab is active.
 * @param {Function} onTabClick - Callback function invoked when a tab is clicked.
 *
 */

type AccordionProps = {
    tabList: Array<{
        text: string;
        tab: string;
        content: React.ReactNode | React.ReactNode[];
    }>;
    path?: string;
    onTabClick?: (tab: string) => void;
};

const Accordion = ({ tabList, path, onTabClick }: AccordionProps) => {
    const [selectedTab, setSelectedTab] = useState('');

    const handleTabClick = (tab: string) => {
        const newTab = selectedTab === tab ? '' : tab;
        setSelectedTab(newTab); // Toggle tab
        if (onTabClick) {
            onTabClick(newTab);
        }
    };

    return (
        <div className="accordion-container">
            {tabList.map(({ text, tab, content }) => {
                const isActive = tab === selectedTab;

                return (
                    <div
                        className={`accordion-item ${isActive ? 'active' : ''}`}
                        key={tab}
                    >
                        <div
                            className="accordion-header"
                            onClick={() => handleTabClick(tab)}
                        >
                            <span>{text}</span>
                            <div className='accordion-svg'>
                                <SVGIcon
                                    src={path || '/public/assets/up-arrow.svg'}
                                />
                            </div>
                        </div>
                        {isActive && (
                            <div className="accordion-content">{content}</div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;
