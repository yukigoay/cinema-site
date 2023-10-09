import Text from './atoms/text/text';
import Image from './atoms/image/image';

const CinemaAccordian = () => {
    const cinemaList = [
        {
            location: 'Pavilion Bukit Jalil',
            type: [
                { nameType: 'Classic', imgpath: '/assets/type/classic.png' },
                { nameType: 'Deluxe', imgpath: '/assets/type/deluxe.png' },
                { nameType: 'Atmos', imgpath: '/assets/type/atmos.jpg' },
                { nameType: 'Beanie', imgpath: '/assets/type/beanie.png' },
            ],
        },
    ];
    return (
        <div className="accordian">
            {cinemaList.map((cinema, i) => (
                <div key={i} className="top-container">
                    <div className="text-container">
                        <Text
                            label={cinema.location}
                            size="h2"
                            weight="bold"
                            textTransform="capitalize"
                        ></Text>
                    </div>
                    <div className="icon-cinema-container">
                        {cinema.type.map((index, i) => (
                            <div key={i} className="icon-cinema">
                                <Image imgpath={index.imgpath}></Image>
                            </div>
                        ))}
                    </div>

                    <div className="icon-container">
                        <p> +</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default CinemaAccordian;
