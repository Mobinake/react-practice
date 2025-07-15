/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	// console.log(images, isLoading);

	return (
		<>
			<h4>{category}</h4>
			{isLoading && <h3>Cargando...</h3>}
			{!isLoading && images.length === 0 && (
				<p>No se encontraron GIFs para esta categoría.</p>
			)}

			<div className="card-grid">
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

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
// mejorado con cline
