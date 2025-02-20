import { on } from 'events';
import styles from './button.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

type ButtonProps = {
    /**
     * Button contents
     */
    label: string;
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
    location,
    continueButton = false,
}: ButtonProps) => {
    const mode = confirmation ? 'buttonConfirmation' : '';
    const enableContinue = continueButton ? 'buttonContinue' : '';

    const handleButtonClick = () => {
        if (onClick) {
            onClick();
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
