import Text from './atoms/text/text';
import Image from './atoms/image/image';

const CinemaMovieImage = ({ title, language,duration }: any) => {
    const createImgPath = (titleMovie: string) => {
        let filename =
            `/assets/movie/` +
            titleMovie.toLowerCase().replace(/\s+/g, '-') +
            `.jpg`;
        return filename;
    };

    return (
        <div className="cinema-movie-image">
            <div className="movie-image-container">
                <div className="image-container">
                    <Image imgpath={createImgPath(title)}></Image>
                </div>
                <div className="text-container">
                    <Text
                        label={title}
                        size="h4"
                        textTransform="uppercase"
                        weight="bold"
                    ></Text>
                    <Text label={duration} textTransform="capitalize"></Text>
                    <Text label={language} textTransform="capitalize"></Text>
                </div>
            </div>
        </div>
    );
};

export default CinemaMovieImage;
