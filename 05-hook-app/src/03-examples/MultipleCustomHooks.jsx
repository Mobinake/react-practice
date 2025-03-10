import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
	const { counter, decrement, increment } = useCounter(1);
	const { data, hasError, isLoading } = useFetch(
		`https://pokeapi.co/api/v2/pokemon/${counter}`
	);

	return (
		<>
			<h2>Informaciones del Pokemon:</h2>
			<hr />
			{isLoading && <LoadingMessage />}
			{hasError && <p>Hubo un error</p>}
			{!isLoading && !hasError && (
				<PokemonCard
					id={counter}
					name={data.name}
					// sprites={[
					// 	// data.sprites.front_default,
					// 	// data.sprites.back_default,
					// 	data.sprites.front_shiny,
					// 	data.sprites.back_shiny,
					// ]}
				/>
			)}

			<button
				className='btn btn-primary mt-3'
				onClick={() => (counter > 1 ? decrement(1) : null)}>
				Anterior
			</button>
			<button
				className='btn btn-primary mt-3'
				disabled={isLoading}
				onClick={() => increment(1)}>
				Siguiente
			</button>
			{/* <pre>{JSON.stringify(data, null, 3)}</pre> */}
		</>
	);
};
