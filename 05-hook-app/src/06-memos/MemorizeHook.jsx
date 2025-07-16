import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const heavyStuff = (iterationsNumber = 100) => {
	for (let i = 0; i < iterationsNumber; i++) {
		console.log('Here we go...');
	}
	return `${iterationsNumber} iterations done`;
};

export const MemorizeHook = () => {
	const { counter, increment } = useCounter(400);
	const [show, setShow] = useState(true);

	const memoValue = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<>
			<h1>
				Contador:
				<small>{counter}</small>
			</h1>
			<hr />
			<h4>{memoValue}</h4>
			<button
				className="btn btn-primary"
				onClick={() => increment(1)}
			>
				+1
			</button>
			<button
				className="btn btn-outline-primary"
				onClick={() => setShow(!show)}
			>
				show/hide {JSON.stringify(show)}
			</button>
		</>
	);
};
