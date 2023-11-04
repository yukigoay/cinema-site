export const fetchData = (url: RequestInfo | URL) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            Origin: 'http://localhost:3000', // Replace with the allowed origin
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error(`Error fetching data from ${url}:`, error);
            throw error; // Re-throw the error for downstream handling, if needed
        });
};
