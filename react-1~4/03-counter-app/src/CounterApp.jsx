import { useState } from 'react';
import PropTypes from 'prop-types';

export function CounterApp({ value }) {
	const [counter, setCounter] = useState(value);

	const handleAdd = () => {
		setCounter(counter + 1);
		// setCounter((c) => c + 1);
	};

	const handleSubs = () => {
		setCounter((c) => c - 1);
	};

	const handleReset = () => {
		setCounter(value);
	};

	return (
		<>
			<h1>CounterApp</h1>
			<h2>{counter}</h2>
			<button
				aria-label="btn-sum"
				onClick={handleAdd}
			>
				+1
			</button>
			<button
				aria-label="btn-decrement"
				onClick={handleSubs}
			>
				-1
			</button>
			<button
				aria-label="btn-reset"
				onClick={handleReset}
			>
				Reset
			</button>
		</>
	);
}

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};
CounterApp.defaultProps = {
	value: 100,
};
