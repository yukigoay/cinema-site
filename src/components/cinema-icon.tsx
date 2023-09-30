import Text from './atoms/text/text';
import Image from './atoms/image/image';
const CinemaIcon = () => {
    const method = [
        {
            type: 'classic',
            details: [
                {
                    detailsSeat: 'single',
                    imagesrc: '/assets/seat/classic-single.png',
                    hoversrc: '/assets/hover-seat/hover-classic-single.jpg',
                    description: 'Standard seats',
                },
                {
                    detailsSeat: 'twin',
                    imagesrc: '/assets/seat/classic-twin.png',
                    hoversrc: '/assets/hover-seat/hover-classic-twin.jpg',
                    description: 'Spacious joined seats with liftable armrests',
                },
            ],
        },
        // {
        //     type: 'indulge',
        //     imagesrc: [
        //         '/assets/seat/indulge-single.png',
        //         '/assets/seat/indulge-twin.png',
        //     ],
        // },
        // {
        //     type: 'deluxe',
        //     imagesrc: [
        //         '/assets/seat/deluxe.png',
        //         '/assets/seat/deluxe-glide.png',
        //     ],
        // },
        // {
        //     type: 'atmos',
        //     imagesrc: [
        //         './assets/seat/atmos-glide.png',
        //         './../assets/seat/atmos-twin.png',
        //     ],
        // },
        // {
        //     type: 'Beanie',
        //     imagesrc: ['/assets/seat/beanie.png'],
        // },
        // {
        //     type: 'oynx',
        //     imagesrc: ['/assets/seat/onyx.png'],
        // },
    ];
    return (
        <div className="upper-right-container">
            {method.map((item, i) => (
                <div className="text-icon-container">
                    <div className="text-container">
                        <Text
                            label={item.type}
                            size="h4"
                            textTransform="uppercase"
                            weight="bold"
                        ></Text>
                    </div>
                    <div className="wrap-icon-container">
                        {item.details.map((key, i) => (
                            <div className="icon-container">
                                <Image
                                    title={key.detailsSeat}
                                    imgpath={key.imagesrc}
                                    hoverpath={key.hoversrc}
                                    desc={key.description}
                                ></Image>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default CinemaIcon;
