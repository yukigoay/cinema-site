import { RequestInfo } from 'undici-types';

export const fetchJsonData = async (jsonFile: RequestInfo | URL) => {
    try {
        const response = await fetch(jsonFile);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${jsonFile}`);
        }
        return response.json();
    } catch (error) {
        console.error(`Error fetching ${jsonFile}:`, error);
        return null;
    }
};

export const expDataUrl = 'http://localhost:8081/api/exp';
export const cinemaDataUrl = 'http://localhost:8081/api/data';
export const locationDataUrl = 'http://localhost:8081/api/loc';

export const getExp = () => fetchJsonData(expDataUrl);
export const getCinema = () => fetchJsonData(cinemaDataUrl);
export const getLocation = () => fetchJsonData(locationDataUrl);
export const getSeat = () => fetchJsonData('http://localhost:8081/api/seat');
