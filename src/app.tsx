import { useState } from 'react';
import viteLogo from '/vite.svg';
import '@css/main.scss';
import Welcome from './components/Welcome';
import React from 'react';

function App() {
  const [count, setCount] = useState(0);

	return (
		<Welcome></Welcome>
	
	);
}

export default App;
