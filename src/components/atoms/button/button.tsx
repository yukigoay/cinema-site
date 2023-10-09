import { Component, ElementType } from 'react';
import styles from './button.module.scss';
import { Link, useHistory } from 'react-router-dom';

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
    location?: string;
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
    location,
}: ButtonProps) => {
    const history = useHistory();

    const handleClick = () => {
        if (location) {
            history.push(location);
            console.log(history);
        }

        // if (onClick) {
        //     onClick();
        // }
    };
    return location ? (
        <Link
            className={`${styles.button} ${styles[border]} ${styles[weight]}`}
            to={location}
        >
            {label}
        </Link>
    ) : (
        <button
            className={`${styles.button} ${styles[border]} ${styles[weight]}`}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default Button;
