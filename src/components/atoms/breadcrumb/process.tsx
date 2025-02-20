import styles from './process.module.scss';
import Text from '../text/text';
import SVGIcon from '../svg/svg';

type ProcessProps = {
    desc: string;
    imgsrc: string;
    index: number;
};

const Process = ({ imgsrc, desc, index }: ProcessProps) => {
    return (
        <div className={`${styles.process}`}>
            <div className={`${styles.upperContainer}`}>
                <div className={`${styles.imageContainer}`}>
                    <SVGIcon src={imgsrc} />
                </div>
                <div className={`${styles.bottomContainer}`}>
                    <div className={`${styles.indexContainer}`}>
                        <Text label={(index + 1).toString()}></Text>
                    </div>
                    <div className={`${styles.desContainer}`}>
                        <Text label={desc} textTransform="capitalize"></Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
