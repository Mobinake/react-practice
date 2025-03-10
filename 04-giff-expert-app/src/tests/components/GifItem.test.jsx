/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Este modulo hace testing de <GifItem/>', () => {
	const title = 'Título de prueba';
	const url = 'https://media.giphy.com/media/example/giphy.gif';

	test('debe hacer match con el snapshot', () => {
		const { container } = render(
			<GifItem
				title={title}
				url={url}
			/>
		);
		expect(container).toMatchSnapshot();
	});
	test('debe mostrar imagen con url y alt', () => {
		render(
			<GifItem
				title={title}
				url={url}
			/>
		);
		// screen.debug();
		// expect(screen.getByRole('img').src).toBe(url);
		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('debe mostrar el titulo del componenete', () => {
		render(
			<GifItem
				title={title}
				url={url}
			/>
		);
		expect(screen.getByText(title)).toBeTruthy();
	});
});
