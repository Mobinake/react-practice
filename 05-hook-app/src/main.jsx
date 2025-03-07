// import { StrictMode } from 'react';
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWCustomHook } from './01-useState/CounterWCustomHook';
// import { SimpleForm } from './02-UseEfect/SimpleForm';
// import { FormWCustom } from './02-UseEfect/FormWCustom';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-UseRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemorizeHook } from './06-memos/MemorizeHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
import { createRoot } from 'react-dom/client';
import './index.css';
import { TodoApp } from './08-useReducer/TodoApp';

createRoot(document.getElementById('root')).render(
	// <StrictMode>
	<TodoApp />
	// </StrictMode>
);

// cambio 1
