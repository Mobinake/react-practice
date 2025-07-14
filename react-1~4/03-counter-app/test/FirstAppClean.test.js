/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {
	const title = 'Hola, soy Mobin';
	const subtitle = 'Ingeniero';

	test('debe hacer match con el snapshot', () => {
		const { container } = render(
			<FirstApp
				title={title}
				subtitle={subtitle}
			/>
		);
		expect(container).toMatchSnapshot();
	});

	test('mostrar mensaje "Hola, soy Mobin"', () => {
		render(
			<FirstApp
				title={title}
				subtitle={subtitle}
			/>
		);
		expect(screen.getByText(title)).toBeTruthy();
	});

	test('debe mostrar title en h1', () => {
		render(
			<FirstApp
				title={title}
				subtitle={subtitle}
			/>
		);
		expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
			title
		);
	});

	test('debe mostrar subtitulo enviado por props', () => {
		render(
			<FirstApp
				title={title}
				subtitle={subtitle}
			/>
		);
		expect(screen.getAllByText(subtitle).length).toBe(1);
	});
});
