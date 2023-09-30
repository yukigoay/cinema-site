import styles from './button.module.scss';
import { Link } from 'react-router-dom';

type ButtonProps = {
    /**
     * Button contents
     */
    label?: string;

    /**
     * Button as Link URL
     */
    href?: string;

    /**
     * Button border type
     */
    border?: string;

    /**
     * Button border type
     */
    weight?: 'light' | 'bold';

    /**
     * Optional click handler
     */

    onClick?: () => void;
};

const Button = ({
    label,
    href,
    border = 'none',
    weight = 'light',
    onClick,
}: ButtonProps) => {
    return href ? (
        <a className={styles.button} href={href}>
            {label}
        </a>
    ) : (
        <button
            className={`${styles.button} ${styles[border]} ${styles[weight]}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
