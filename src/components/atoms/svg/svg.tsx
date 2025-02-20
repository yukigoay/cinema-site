import React, { useEffect, useState } from 'react';

type SVGIconProps = React.SVGAttributes<SVGElement> & {
    src: string; // Path to the SVG file
};

const SVGIcon = ({ src, ...props }: SVGIconProps) => {
    const [svgContent, setSvgContent] = useState<string | null>(null);

    useEffect(() => {
        const fetchSvg = async () => {
            try {
                const response = await fetch(src);
                if (!response.ok) {
                    throw new Error('Failed to fetch SVG');
                }
                const text = await response.text();
                setSvgContent(text);
            } catch (error) {
                console.error('Error fetching SVG:', error);
            }
        };

        fetchSvg();
    }, [src]);

    const renderSvg = () => {
        if (!svgContent) return null;

        const parser = new DOMParser();
        const svgDocument = parser.parseFromString(svgContent, 'image/svg+xml');
        const svgElement = svgDocument.querySelector('svg');
        if (!svgElement) return null;

        // Serialize the SVG and convert it to React-compatible attributes
        return (
            <svg
                {...props}
                dangerouslySetInnerHTML={{
                    __html: svgElement.innerHTML,
                }}
            />
        );
    };

    return renderSvg();
};

export default SVGIcon;
