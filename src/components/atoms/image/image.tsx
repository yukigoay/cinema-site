import styles from './image.module.scss';
import { Link } from 'react-router-dom';
import Text from '../text/text';
import { useState } from 'react';

type ImageProps = {
    imgpath?: string;
    imgpath1?: string;

    /**
     * Optional click handler
     */
    hoverpath?: string;
    onClick?: () => void;
    title?: string;
    location?: string;
    desc?: string;
};

const Image = ({
    imgpath,
    imgpath1,
    hoverpath,
    desc,
    title,
    location,
}: ImageProps) => {
    const [isImageOne, setIsImageOne] = useState(true); // State to track which image to display
    const onClick = () => {
        setIsImageOne((prevValue) => !prevValue);
    };
    return location ? (
        <div className={`${styles.mainImage}`}>
            <Link to={location}>
                <img
                    className={`${styles.image}`}
                    onClick={() => onClick()}
                    src={isImageOne ? imgpath : imgpath1}
                />
            </Link>
        </div>
    ) : (
        <div className={`${styles.tooltipContainer}`}>
            <div className={`${styles.mainImage}`}>
                <img
                    className={`${styles.image}`}
                    onClick={() => onClick()}
                    src={isImageOne ? imgpath : imgpath1}
                />
            </div>
            {hoverpath && desc && title && (
                <div className={`${styles.tooltip}`}>
                    <div className={`${styles.tootltipImage}`}>
                        <img src={hoverpath} alt="Image Tooltip" />
                    </div>
                    <div className={`${styles.tootltipImage}`}>
                        <Text label={title} weight="bold" size="h2"></Text>
                        <Text label={desc} weight="bold"></Text>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Image;
