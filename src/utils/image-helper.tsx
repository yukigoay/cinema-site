import React, { Suspense, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LazyLoadImage } from 'root/webapp/components/ss2/atoms/image';
LazyLoadImage;
import SVG from 'react-inlinesvg';
// If the module is not found, you may need to install it:
// npm install react-inlinesvg
// or
// yarn add react-inlinesvg

// Define the props interface for the functional component
interface ImageHelperProps extends RouteComponentProps {
    displayImg?: string;
    displaySVG?: string;
    isSVG?: boolean;
    alt?: string;
    className?: string;
    effect?: 'opacity' | 'blur' | 'black-white' | 'null';
    isHide?: boolean;
    fallbackSrc?: string;
    style?: React.CSSProperties;
    prefix?: string;
    srcSVG?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    isDisableLazyLoad?: boolean;
}

const ImageHelper: React.FC<ImageHelperProps> = ({
    displayImg,
    displaySVG,
    isSVG = false,
    alt = '',
    className,
    effect = 'opacity',
    isHide = false,
    fallbackSrc,
    style,
    srcSVG,
    onClick,
    onMouseEnter,
    onMouseLeave,
    prefix,
    isDisableLazyLoad,
}) => {
    const [SVGComponentType, setSVGComponentType] =
        useState<React.ComponentType<any> | null>(null);

    const addDefaultSrc = (
        e: React.SyntheticEvent<HTMLImageElement>,
        src: string
    ) => {
        let defaultImg = src;
        let http = new XMLHttpRequest();
        http.open('HEAD', defaultImg, false);
        http.send();
        if (http.status !== 404) {
            e.currentTarget.src = defaultImg;
        }
    };

    const _renderLazyLoadImage = () => (
        <LazyLoadImage
            src={displayImg}
            alt={alt}
            className={className}
            effect={effect}
            onError={(e) => fallbackSrc && addDefaultSrc(e, fallbackSrc)}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    );

    const _renderNonLazyLoadImage = () => (
        <img
            src={displayImg}
            alt={alt}
            className={className}
            effect={effect}
            onError={(e) => fallbackSrc && addDefaultSrc(e, fallbackSrc)}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    );

    if (isHide) return null;

    return (
        <>
            {isSVG ? (
                <>
                    {srcSVG ? (
                        <SVG
                            className={className}
                            style={style}
                            src={srcSVG}
                            onClick={onClick}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        />
                    ) : SVGComponentType ? (
                        <Suspense fallback={<></>}>
                            <SVGComponentType
                                id={displaySVG}
                                name={displaySVG}
                                className={className}
                                style={style}
                                prefix={prefix}
                                onClick={onClick}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            />
                        </Suspense>
                    ) : (
                        <>{displaySVG}</>
                    )}
                </>
            ) : (
                <>
                    {displayImg &&
                        (isDisableLazyLoad
                            ? _renderNonLazyLoadImage()
                            : _renderLazyLoadImage())}
                </>
            )}
        </>
    );
};

export default ImageHelper;
