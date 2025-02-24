/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	console.log(images, isLoading);

	return (
		<>
			<h4>{category}</h4>
			{isLoading && <h3>Cargando......</h3>}

			<div className='card-grid'>
				{images.map((image) => (
					<GifItem
						key={image.id}
						{...image}
					/>
				))}
			</div>
		</>
	);
};
