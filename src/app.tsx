import { useState } from 'react';
import '@css/main.scss';
import Cinema from './components/cinema';
import ProcessCinema from './components/process-cinema';
function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="wrapper">
            <Cinema></Cinema>
            {/* <ProcessCinema></ProcessCinema> */}
        </div>
    );
}

export default App;
