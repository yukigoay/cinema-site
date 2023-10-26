import Accordian from './atoms/accordian';
import Button from './atoms/button';
import Text from './atoms/text/text';

const PopupConfirmation2 = () => {
   
    return (
        <div className="voucher-container">
            <Accordian label="Voucher" />
            <div className="left-container">
                <Text label="RM20 " />
            </div>
            <div className="">
                <Button continueButton label="APPLY" />
            </div>
        </div>
    );
};

export default PopupConfirmation2;
