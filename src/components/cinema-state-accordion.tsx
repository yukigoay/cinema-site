import { useDispatch, useSelector } from 'react-redux';
import Accordion from './atoms/accordion/accordion';
import { useEffect, useState } from 'react';
import { setLocation, setSelectedState } from '../redux/slice/location-slice';

import DropDownList from './atoms/drop-down-list/dropDownList';

type Location = {
    location: string;
};

type LocationList = {
    state: string;
    locations: Location[];
};

type MassageData = {
    tab: string;
    text: string;
    content: JSX.Element;
};
//done
const CinemaStateAccordion = () => {
    const dispatch = useDispatch();
    const locationList = useSelector(
        (state: any) => state.locationReducer.locationList
    );
    const [massageData, setMassageData] = useState<MassageData[]>([]);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    useEffect(() => {
        const data = locationList.map(({ state, locations }: LocationList) => {
            const locationContentList = locations.map(
                ({ location }) => location
            );

            return {
                tab: state,
                text: state,
                content: (
                    <DropDownList
                        tabList={locationContentList}
                        defaultItem
                        onClick={(item) => {
                            setSelectedItem(item);
                        }}
                    />
                ),
            };
        });

        setMassageData(data);
        if (data.length > 0) {
            dispatch(setSelectedState(data[0].tab));
        }
    }, [locationList]);

    useEffect(() => {
        if (selectedItem) {
            dispatch(setLocation(selectedItem));
        }
    }, [selectedItem]);
    
    const handleTabClick = (tab: string) => {
        const tabData = massageData.find((data) => data.tab === tab);
        dispatch(setSelectedState(tab));

        if (tabData) {
            const firstItem = (tabData.content.props.tabList || [])[0];
            setSelectedItem(firstItem);
        }
    };

    return (
        <Accordion
            tabList={massageData}
            onTabClick={(tab) => handleTabClick(tab)}
        />
    );
};

export default CinemaStateAccordion;
