import React from 'react';
import './button.css';
import { current } from '@reduxjs/toolkit';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label?: string;
    /**
     * Round or not round
     */
    radius?: 'round' | 'non-round';
    /**
     * What text color to use?
     */
    color?: string;
    /**
     * What text color to use
     */
    image?: string;
    /**
     * What type of border line ?
     */
    border?: string;
    /**
     * Is this the principal call to action on the page?
     */
    hover?: boolean;
    /**
     * Optional click handler
     */

    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    primary = false,
    hover = false,
    size = 'medium',
    backgroundColor,
    label,
    radius = 'round',
    color,
    image,
    border,
    ...props
}: ButtonProps) => {

    const mode = primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary';
        
    const mode1 = hover ? 'storybook-button--primary :hover' : '';

    return (
        <button
            type="button"
            className={[
                'storybook-button',
                `storybook-button--${size}`,
                mode,
                mode1,
                `storybook-button--${radius}`,
                `storybook-button--${border}`,
            ].join(' ')}
            style={{ backgroundColor, color }}
            {...props}
        >
            {label}
            {image}
        </button>
    );
};
