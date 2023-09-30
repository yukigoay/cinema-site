import { useState } from 'react';
import Text from './atoms/text/text';
import Image from './atoms/image/image';
const ProcessCinema = () => {
    const process = [
        {
            desc: 'select seats',
            imgsrc: '/assets/selection-icon/image-icon.png',
        },
        {
            desc: 'food & beverage',
            imgsrc: '/assets/selection-icon/food-icon.png',
        },
        { desc: 'payment', imgsrc: '/assets/selection-icon/payment-icon.png' },
        {
            desc: 'confirmation',
            imgsrc: '/assets/selection-icon/confirmation-icon.png',
        },
    ];
    return (
        <div className="top-container">
            {process.map((item, i) => (
                <div className="upper-container">
                    <div className="image-container">
                        <Image imgpath={item.imgsrc}></Image>
                    </div>
                    <div className="bottom-container">
                        <div className="index-container">
                            <Text
                                backgroundColor="white"
                                label={(i + 1).toString()}
                            ></Text>
                        </div>
                        <div className="desc-container">
                            <Text
                                label={item.desc}
                                textTransform="capitalize"
                            ></Text>
                        </div>
                        {i >= 0 && i < 3 && (
                            <div className="icon-container">
                                <Image imgpath="/assets/right-arrow.png"></Image>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ProcessCinema;
