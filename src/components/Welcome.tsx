import Bunny from '@assets/products/hello-bunny-resized.jpg';
import '@css/main.scss';
import Cinema from './Cinema';

export default function Welcome() {
    return (
        <>
            {/* <Cinema> </Cinema> */}
            <div className="wrapper">
                <h1>Welcome To My App</h1>
                <p>This is going to be the coolest app in the world!</p>
                <img src={Bunny} alt="Sammy Image" width={200} height={200} />
            </div>
        </>
    );
}
