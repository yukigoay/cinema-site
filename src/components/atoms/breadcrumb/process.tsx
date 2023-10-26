import styles from './process.module.scss';
import Text from '../text/text';
import Image from '../image/image';

type ProcessProps = {
    processList: Array<{ desc: string; imgsrc: any }>;
    /**
     * Optional click handler
     */

    onClick?: () => void;
    onChange?: () => void;
};

const Process = ({ processList, onClick }: ProcessProps) => {
    if (!processList) {
        return null;
    }
    return (
        <div className={`${styles.process}`}>
            {processList.map((item, i) => (
                <div className={`${styles.upperContainer}`}>
                    <div className={`${styles.imageContainer}`}>
                        <Image imgpath={item.imgsrc}></Image>
                    </div>
                    <div className={`${styles.bottomContainer}`}>
                        <div className={`${styles.indexContainer}`}>
                            <Text label={(i + 1).toString()}></Text>
                        </div>
                        <div className={`${styles.desContainer}`}>
                            <Text
                                label={item.desc}
                                textTransform="capitalize"
                            ></Text>
                        </div>
                        {i >= 0 && i < 3 && (
                            <div className={`${styles.iconContainer}`}>
                                <Image imgpath="/assets/right-arrow.png"></Image>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Process;
