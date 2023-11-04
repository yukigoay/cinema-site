// Define the RootState type
export type RootState = {
    data: {
        getData: any;
        year: string;
        date: any;
        month: string;
        weekday: string;
        location: string;
        message: string; // Adjust the type based on your actual data structure
        counter: number;
    };

    location: {
        locationList: any;
        selectedData: any;
        status: 'idle'; // Possible values: 'idle', 'loading', 'succeeded', 'failed'
        error: null;
    };

    // Add other slices if you have them
};
