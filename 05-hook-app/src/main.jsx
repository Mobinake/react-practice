import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import { StrictMode } from 'react';
import { MainApp } from './09-useContext/MainApp';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<MainApp />
		</StrictMode>
	</BrowserRouter>
);
