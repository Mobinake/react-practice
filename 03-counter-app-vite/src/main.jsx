// import { HelloWorld } from "./HelloWorld";
// import { FirstApp } from "./FirstApp";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <FirstApp title={"Hola"} subTitle={1234} /> */}
		<CounterApp value={0} />
	</React.StrictMode>
);
