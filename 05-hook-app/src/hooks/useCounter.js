import { useState } from 'react';

export const userCounter = () => {
	const [counter, setCounter] = useState(initialValue);
	return {
		counter,
	};
};
