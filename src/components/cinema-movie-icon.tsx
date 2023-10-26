import Text from './atoms/text/text';
import Image from './atoms/image/image';
import { useState, useEffect, SetStateAction } from 'react';
import { fetchData } from './utils';

const CinemaMovieIcon = ({ iconTitle, exp }: any) => {
    const expDataUrl = 'http://localhost:8081/api/exp';
    const [experience, setExperience] = useState([]);
    //export default CinemaIcon;
    // const CinemaIcon = (title: any, experience: any) => {
    useEffect(() => {
        // setExperience(experience1);
        fetchData(expDataUrl)
            .then((experience: SetStateAction<never[]>) => {
                setExperience(experience);
            })
            .catch(() => {});
    }, []);

    const seatDetails = exp.filter((object: any) => {
        return object.type === iconTitle;
    });

    const createImgPath = (title: string, sub: string) => {
        let filename =
            `/assets/seat/` +
            title.toLowerCase().replace(/\s+/g, '-') +
            `-` +
            sub.toLowerCase().replace(/\s+/g, '-') +
            `.png`;
        return filename;
    };

    return (
        <div className="cinema-movie-icon">
            {seatDetails.map((item: any) => (
                <div className="text-container">
                    <div className="text">
                        <Text
                            label={iconTitle}
                            size="h4"
                            textTransform="uppercase"
                            weight="bold"
                        ></Text>
                    </div>
                    <div className="icon-container">
                        {item?.details?.map(({ title, desc }: any) => (
                            <div className="icon">
                                <Image
                                    title={title}
                                    imgpath={createImgPath(iconTitle, title)}
                                    desc={desc}
                                ></Image>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CinemaMovieIcon;
