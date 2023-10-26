import Accordian from './atoms/accordian';
import Button from './atoms/button';
import Text from './atoms/text/text';
import Image from './atoms/image/image';
import PopupConfirmation2 from './popup-confirmation2';

const PopupConfirmation = () => {
    return (
        <div className="pop-confirmation">
            <div className="pop-confirmation-container">
                <div className="top-container">
                    <Accordian label="Classic" />
                    <div className="left-container">
                        <Text label="classic" />
                        <Text label="RM20 " />
                    </div>
                    <div className="right-container">
                        <Image />
                        <Text />
                        <Image />
                    </div>
                </div>
                <PopupConfirmation2 />

                <div className="bottom-container">
                    <Text label="RM" />
                    <Text label="" />
                    <Button continueButton label="Continue" />
                </div>
            </div>
            <div className="pop-confirmation-close">
                <Image imgpath="/assets/selection-icon/close.png" />
            </div>
        </div>
    );
};

export default PopupConfirmation;
