import React from 'react';
import { useCounter, useFetch } from '../hooks';

export const MultipleCustomHooks = () => {
	const { counter, decrement, increment } = useCounter(1);
	const { data, hasError, isLoading } = useFetch(
		`https://pokeapi.co/api/v2/pokemon/${counter}`
	);

	return (
		<>
			<h2>Informaciones del Pokemon:</h2>
			<hr />
			{isLoading && <p>Cargando...</p>}
			{hasError && <p>Hubo un error</p>}
			{!isLoading && !hasError && (
				<>
					<p>{data?.name}</p>
					<img
						src={data.sprites.front_default}
						alt={data.name}
					/>
				</>
			)}

			<button
				className='btn btn-primary mt-3'
				onClick={() => (counter > 1 ? decrement(1) : null)}>
				Anterior
			</button>
			<button
				className='btn btn-primary mt-3'
				onClick={() => increment(1)}>
				Siguiente
			</button>
			{/* <pre>{JSON.stringify(data, null, 3)}</pre> */}
		</>
	);
};
