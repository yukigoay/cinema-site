import Text from './atoms/text/text';
import Image from './atoms/image/image';

const CinemaMovieIcon = ({ icon }: any) => {
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
            <div className="text-container">
                <div className="text">
                    <Text
                        label={icon.type}
                        size="h4"
                        textTransform="uppercase"
                        weight="bold"
                    ></Text>
                </div>
                <div className="icon-container">
                    {icon?.details?.map(({ title, desc }: any) => (
                        <div className="icon">
                            <Image
                                title={title}
                                imgpath={createImgPath(icon.type, title)}
                                desc={desc}
                            ></Image>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CinemaMovieIcon;
