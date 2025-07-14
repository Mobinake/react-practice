/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en FirstApp', () => {
	const value = 100;

	test('debe hacer match con el snapshot', () => {
		const { container } = render(<CounterApp value={value} />);
		expect(container).toMatchSnapshot();
	});

	test('el valor inicial de 100', () => {
		render(<CounterApp value={value} />);
		expect(screen.getByText(100)).toBeTruthy();
	});

	test('debe de incrementar con el boton +1', () => {
		const initialValue = 10;
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('+1'));
		expect(screen.getByText('11')).toBeTruthy();
	});

	test('debe de decrementar con el boton -1', () => {
		const initialValue = 10;
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('-1'));
		expect(screen.getByText('9')).toBeTruthy();
	});
	test('debe de funcionar el boton de reset', () => {
		const initialValue = 10;
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('Reset'));
		fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

		expect(screen.getByText('10')).toBeTruthy();
	});
});
