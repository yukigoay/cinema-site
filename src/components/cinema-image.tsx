import Text from './atoms/text/text';
import Image from './atoms/image/image';
const CinemaImage = () => {
    const imageCinema = [
        {
            title: 'MALBATT MISI BAKARA',
            language: 'Bahasa Melayu',
            imagepath: '/assets/movie/malbatt.jpg',
        },
        // {
        //     title: 'THE NUN II',
        //     language: 'English',
        //     imagepath: '/assets/movie/the-nun.jpg',
        // },
        // {
        //     title: 'Sleep',
        //     language: 'Korean',
        //     imagepath: '/assets/movie/sleep.jpg',
        // },
    ];
    return (
        <div className="left-container">
            {imageCinema.map((item, i) => (
                <div className="movie-image-text-container">
                    <div className="movie-image-container">
                        <Image imgpath={item.imagepath}></Image>
                    </div>
                    <div className="movie-text-container">
                        <Text
                            label={item.title}
                            size="h4"
                            textTransform="uppercase"
                            weight="bold"
                        ></Text>
                        <Text
                            label={item.language}
                            textTransform="capitalize"
                        ></Text>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default CinemaImage;
