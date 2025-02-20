import Process from './atoms/breadcrumb';
import SVGIcon from './atoms/svg/svg';

const ProcessCinema = () => {
    const process = [
        {
            desc: 'select seats',
            imgsrc: '/assets/selection-icon/image-icon.svg',
        },
        {
            desc: 'food & beverage',
            imgsrc: '/assets/selection-icon/food-icon.svg',
        },
        { desc: 'payment', imgsrc: '/assets/selection-icon/payment-icon.svg' },
        {
            desc: 'confirmation',
            imgsrc: '/assets/selection-icon/confirmation-icon.svg',
        },
    ];
    return (
        <div className="process">
            {process.map(({ imgsrc, desc }, i) => (
                <div key={desc}>
                    <Process imgsrc={imgsrc} desc={desc} index={i} />
                    {i >= 0 && i < 3 && (
                        <div className="icon-container">
                            <SVGIcon src="/assets/right-arrow.svg" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProcessCinema;
