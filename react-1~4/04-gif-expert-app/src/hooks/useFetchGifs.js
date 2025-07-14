/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	// llamamos al hook, desestructuramos lo obtenido y lo asignamos a las variables
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// obtiene las imagenes asyncronamente para setearlas en mi category
	const getImages = async () => {
		const newImages = await getGifs(category);
		setImages(newImages);
		setIsLoading(false);
	};

	// evita que se ejecute cada vez que se actualiza el hook(?
	useEffect(() => {
		getImages();
	}, []);
	return {
		images,
		isLoading,
	};
};
