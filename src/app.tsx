import { useState } from 'react';
import '@css/main.scss';
import Router from './route';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="wrapper">
            <Router />
        </div>
    );
}

export default App;
