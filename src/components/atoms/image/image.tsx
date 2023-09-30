import styles from './image.module.scss';
import { Link } from 'react-router-dom';
import Text from '../text/text';

type ImageProps = {
    /**
     * Image path
     */
    imgpath?: string;

    /**
     * Optional click handler
     */
    hoverpath?: string;
    onClick?: () => void;
    title?: string;

    desc?: string;
};

const Image = ({ imgpath, onClick, hoverpath, desc, title }: ImageProps) => {
    return (
        <div className={`${styles.tooltipContainer}`}>
            <div className={`${styles.mainImage}`}>
                <img
                    className={`${styles.image}`}
                    onClick={onClick}
                    src={imgpath}
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
