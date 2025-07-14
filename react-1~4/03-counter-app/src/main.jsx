import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CounterApp value={1} />
		{/* <FirstApp title="Hola, soy Goku" subtitle="Soy un subtítulo" /> */}
	</React.StrictMode>
);
