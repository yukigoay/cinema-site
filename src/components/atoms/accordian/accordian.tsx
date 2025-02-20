import styles from './accordian.module.scss';
import Text from '../text/text';
import Image from '../image/image';

type AccordianProps = {
    /**
     * Optional click handler
     */
    imgpath?: string;
    label?: string;
    onClick?: () => void;
};

const Accordian = ({
    imgpath,
    label,


}: AccordianProps) => {
    function handleItemClick(label: string | undefined): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className={`${styles.accordian}`}>
            <div
                className={`${styles.topContainer}`}
                onClick={() => handleItemClick(label)}
            >
                <div className="text-container">
                    <Text
                        label={label}
                        size="h2"
                        weight="bold"
                        textTransform="capitalize"
                    ></Text>
                </div>
                {imgpath && (
                    <div className="icon-cinema-container">
                        <div className="icon-cinema">
                            <Image imgpath={imgpath}></Image>
                        </div>
                    </div>
                )}

                <div className="icon-container">
                    <p> +</p>
                </div>
            </div>
        </div>
    );
};

export default Accordian;
