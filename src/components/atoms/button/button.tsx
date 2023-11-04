import styles from './button.module.scss';
import { setData } from '../../../redux/slice/location-slice';
import { RootState } from '../../../redux/type';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

type ButtonProps = {
    /**
     * Button contents
     */
    anotherInfo?: any[];
    label?: string;
    list?: Array<string>;
    /**
     * Button as Link URL
     */
    href?: string;
    continueButton?: boolean;

    confirmation?: boolean;
    /**
     * Button border type
     */
    border?: string;
    location?: string;
    /**
     * Button border type
     */
    weight?: 'light' | 'bold';
    type?: string;
    /**
     * Optional click handler
     */

    onClick?: () => void;
};

const Button = ({
    label,
    confirmation = false,
    border = 'none',
    weight = 'light',
    onClick,
    type,
    location,
    anotherInfo = [],
    continueButton = false,
}: ButtonProps) => {
    const mode = confirmation ? 'buttonConfirmation' : '';
    const enableContinue = continueButton ? 'buttonContinue' : '';

    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.location);

    const handleButtonClick = () => {
        if (type) {
            const newData = {
                label,
                type,
                anotherInfo,
            };
            dispatch(setData(newData));
        }
    };

    return location ? (
        <Link
            className={`${styles.button} ${styles[border]} ${styles[weight]}
            ${styles[mode]} ${styles[enableContinue]}`}
            to={location}
            onClick={() => handleButtonClick()}
        >
            {label}
        </Link>
    ) : (
        <button
            className={`${styles.button} ${styles[border]} ${styles[weight]}  ${styles[mode]} ${styles[enableContinue]}`}
            onClick={() => handleButtonClick()}
        >
            {label}
        </button>
    );
};

export default Button;
