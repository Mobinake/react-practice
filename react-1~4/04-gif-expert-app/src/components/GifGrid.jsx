import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	console.log({ images, isLoading });

	return (
		<>
			<h4>{category}</h4>
			{isLoading && <h2>Cargando...</h2>}
			<div className="card-grid">
				{images.map((image) => (
					<GifGridItem
						key={image.id}
						//esparcir las propiedades, enviarlas todas
						{...image}
					/>
				))}
			</div>
		</>
	);
};
