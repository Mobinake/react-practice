import { useState } from 'react';

export const CounterApp = () => {
	const [counters, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});

	const { counter1, counter2, counter3 } = counters;

	const incrementarCounter1 = () => {
		setCounter({
			...counters,
			counter1: counter1 + 1,
			counter2,
			counter3,
		});
	};
	const incrementarCounter2 = () => {
		setCounter({
			...counters,
			counter2: counter2 + 1,
		});
	};
	const incrementarCounter3 = () => {
		setCounter({
			...counters,

			counter3: counter3 + 1,
		});
	};

	return (
		<>
			<h1>Counter: {counter1}</h1>
			<h1>Counter: {counter2}</h1>
			<h1>Counter: {counter3}</h1>
			<hr />
			<button
				className='btn'
				onClick={() => incrementarCounter1()}>
				+1
			</button>
			<button
				className='btn'
				onClick={() => incrementarCounter2()}>
				+1
			</button>
			<button
				className='btn'
				onClick={() => incrementarCounter3()}>
				+1
			</button>
		</>
	);
};
