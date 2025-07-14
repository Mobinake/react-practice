/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {
	// const title = 'Hola, soy Mobin';
	const subtitle = 69;
	// test('Debe de hacer match con el snapshot', () => {
	// 	const { container } = render(
	// 		<FirstApp
	// 			title={title}
	// 			subtitle={subtitle}
	// 		/>
	// 	);
	// 	expect(container).toMatchSnapshot();
	// });

	test('mostrar titulo en h1', () => {
		const title = 'Hola, soy Mobin';
		const { getByText, getByTestId } = render(
			<FirstApp
				title={title}
				subtitle={subtitle}
			/>
		);

		expect(getByText(title)).toBeTruthy();
		expect(getByTestId('test-title').innerHTML).toContain(title);

		// const h1 = container.querySelector('h1');
		// expect(h1.innerHTML).toBe(title);
	});

	test('mostrar el subtitulo enviado por props', () => {
		const title = 'Hola, soy props';
		const subtitle = 'master en ciencias';
		const { getAllByText } = render(
			<FirstApp
				title={title}
				subtitle={subtitle}
			/>
		);

		expect(getAllByText(subtitle).length).toBe(1);
	});
});
