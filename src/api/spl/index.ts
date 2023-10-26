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

export const getExp = () => fetchJsonData('http://localhost:8081/api/exp');
export const getCinema = () => fetchJsonData('http://localhost:8081/api/data');
export const getLocation = () => fetchJsonData('http://localhost:8081/api/loc');
