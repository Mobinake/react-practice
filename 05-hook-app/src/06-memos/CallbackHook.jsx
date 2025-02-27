import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

	const incrementFather = useCallback((value) => {
		setCounter((c) => c + value);
	}, []);

	// const incrementFather = () => {
	// 	setCounter(counter + 1);
	// };

	// // solo se dispara cuando cambia el padre
	useEffect(() => {
		// 	incrementFather();
	}, [incrementFather]);

	return (
		<>
			<h1>UseCallbackHook: {counter}</h1>
			<hr />
			<ShowIncrement increment={incrementFather} />
		</>
	);
};
