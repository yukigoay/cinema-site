// Define the RootState type
export type RootState = {
    locationReducer: any;
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
    getData: { expData: any; cinemaData: any; locationData: any };
    mongo: {
        expData: any;
        cinemaData: any;
        locationData: any;
    };
    locationList: {};
    // Add other slices if you have them
};
