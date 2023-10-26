import Process from './atoms/breadcrumb';

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
        <div className="process">
            <Process processList={process}></Process>
        </div>
    );
};

export default ProcessCinema;
