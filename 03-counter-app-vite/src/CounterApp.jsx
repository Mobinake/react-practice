import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
	const [counter, setCounter] = useState(value);

	const handleAdd = () => setCounter((c) => c + 1);

	const handleDecrease = () => setCounter((c) => c - 1);

	const handleReset = () => setCounter(() => value);

	return (
		<>
			<h1>CounterApp</h1>
			<h2 data-testid={'counter'}> {counter} </h2>
			<button
				aria-label='btn-add'
				onClick={handleAdd}>
				+1
			</button>
			<button
				aria-label='btn-decrease'
				onClick={handleDecrease}>
				-1
			</button>
			<button
				aria-label='btn-reset'
				onClick={handleReset}>
				Reset
			</button>
		</>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};
