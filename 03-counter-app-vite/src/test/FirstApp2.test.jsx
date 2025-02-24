/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp2/>', () => {
	const title = 'Hola, soy Kakaroto';
	const subTitle = 'Soy el apellido';
	test('debe de hacer match con el snapshot', () => {
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar el mensaje Hola, soy Kakaroto', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByText(title)).toBeTruthy();
	});

	test('debe de mostrar el titulo en un h1', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
			title
		);
	});

	test('debe mostrar el subtitulo enviado por props', () => {
		render(
			<FirstApp
				title={title}
				subTitle={subTitle}
			/>
		);
		expect(screen.getAllByText(subTitle).length).toBe(1);
	});
});
