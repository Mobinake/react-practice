/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../CounterApp';

describe('Pruebas de <CounterApp/>', () => {
	const initialValue = 10;

	test('debe de hacer match con el snapshot', () => {
		const { container } = render(<CounterApp value={initialValue} />);
		expect(container).toMatchSnapshot();
	});

	test('debe de mostrar el valor inicial de 100 <ConuterApp value={100}', () => {
		render(<CounterApp value={initialValue} />);
		expect(screen.getByText(10)).toBeTruthy();
	});

	test('debe de incrementar con el boton +1', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('+1'));
		expect(screen.getByText('11')).toBeTruthy();
	});

	test('debe de disminuir con el boton -1', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('-1'));
		expect(screen.getByText('9')).toBeTruthy();
	});

	test('debe de resetear con el boton Reset', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));

		// fireEvent.click(screen.getByText('Reset'));
		// expect(screen.getByText('10')).toBeTruthy();

		// con aria-label
		fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
		expect(screen.getByText('10')).toBeTruthy();
	});
});
