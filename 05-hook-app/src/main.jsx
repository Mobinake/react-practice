import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp';
import { CounterWCustomHook } from './01-useState/CounterWCustomHook';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<CounterWCustomHook />
	</StrictMode>
);
