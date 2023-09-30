import styles from './text.module.scss';
import { Link } from 'react-router-dom';

type TextProps = {
    /**
     * Text contents
     */
    label?: string;
    /**
     * Text font weight
     */
    weight?: 'light' | 'bold';

    /**
     * What font size to use?
     */
    size?: string;

    /**
     * Text transformation
     */
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize';

    /**
     * Text background color
     */
    backgroundColor?: string;

    /**
     * Optional click handler
     */

    onClick?: () => void;
};

const Text = ({
    label,
    weight = 'light',
    size = 'default',
    textTransform = 'capitalize',
    backgroundColor,
    onClick,
}: TextProps) => {
    return (
        <p
            className={`${styles.text} ${styles[weight]} ${styles[size]} ${styles[textTransform]} `}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            {label}
        </p>
    );
};

export default Text;
