import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWCustomHook } from './01-useState/CounterWCustomHook';
// import { SimpleForm } from './02-UseEfect/SimpleForm';
import { FormWCustom } from './02-UseEfect/FormWCustom';

createRoot(document.getElementById('root')).render(<FormWCustom />);
