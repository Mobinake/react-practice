/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp/>', () => {
	// test('debe coincidir con el snapshot', () => {
	// 	const title = 'Hola, soy loco';
	// 	const { container } = render(<FirstApp title={title} />);
	// 	expect(container).toMatchSnapshot();
	// });

	test('debe mostrar el titulo en h1', () => {
		const title = 'hola, no soy loco';
		const { container, getByText, getByTestId } = render(
			<FirstApp title={title} />
		);
		expect(getByText(title)).toBeTruthy();

		// que sea exactamente igual
		expect(getByTestId('test-title').innerHTML).toBe(title);
		// que contenga el id
		expect(getByTestId('test-title').innerHTML).toContain(title);

		const h1 = container.querySelector('h1');
		expect(h1.innerHTML).toContain(title);
	});
	test('debe de mostrar el subtitulo enviado por props', () => {
		const title = 'hola, no soy loco';
		const subtitle = 'soy el subtexto';
		const { getAllByText } = render(
			<FirstApp
				title={title}
				subTitle={subtitle}
			/>
		);
		//getByText se asegura que tome uno solo
		expect(getAllByText(subtitle).length).toBe(1);
	});
});
