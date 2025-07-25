import { useRef } from 'react';

export const FocusScreen = () => {
	const inputRef = useRef();

	const onClick = () => {
		inputRef.current.select();
	};

	return (
		<>
			<h1>Focus en la pantalla</h1>
			<hr />
			<input
				ref={inputRef}
				type="text"
				placeholder="Ingrese su nombre"
				className="form-control"
			/>
			<input
				ref={inputRef}
				type="text"
				placeholder="Ingrese su nombre"
				className="form-control"
			/>
			<button
				className="btn btn-primary mt-2"
				onClick={onClick}
			>
				Focus a algo
			</button>
		</>
	);
};
