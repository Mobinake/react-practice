/* eslint-disable no-undef */
import { GifGrid } from '../../components/GifGrid';
import { render, screen } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

//simula la funcion useFetchGifs
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
	useFetchGifs.mockReturnValue({
		images: [],
		isLoading: true,
	});

	const category = 'Goku';
	test('debe mostrar el loading inicial', () => {
		render(<GifGrid category={category} />);
		expect(screen.getByText('Cargando...'));
		expect(screen.getByText(category));
		// screen.debug();
	});

	test('debe mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https://localhost/cualquier/cosa.jpg',
				title: 'Cualquier cosa',
			},
			{
				id: '123',
				url: 'https://localhost/cualquier/cosa.jpg',
				title: 'Cualquier cosa',
			},
		];
		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});
		render(<GifGrid category={category} />);
		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
