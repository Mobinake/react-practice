import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'Jugador',
		email: 'jugador@gmail.com',
	});
	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	// se encarga de controlar si cambio el estado, para ejecutar la accion
	useEffect(() => {
		// console.log('useEffect1');
	}, []);
	useEffect(() => {
		// console.log('formState cambió');
	}, [formState]);
	useEffect(() => {
		// console.log('email changes');
	}, [email]);

	return (
		<>
			<h1>Formulario</h1>
			<hr />
			<input
				type="text"
				className="form-control"
				placeholder="Username"
				name="username"
				value={username}
				onChange={onInputChange}
			/>
			<input
				type="email"
				className="form-control mt-4"
				placeholder="ejemplo@gmail.com"
				name="email"
				value={email}
				onChange={onInputChange}
			/>
			{username === 'Jugador' && <Message />}
		</>
	);
};
