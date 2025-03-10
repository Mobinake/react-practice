/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas el MultipleCustomHooks', () => {
	const mockIncrement = jest.fn();
	useCounter.mockReturnValue({
		counter: 1,
		increment: mockIncrement,
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('mostrar el componente por defecto', () => {
		useFetch.mockReturnValue({
			data: null,
			hasError: null,
			isLoading: true,
		});

		render(<MultipleCustomHooks />);
		expect(screen.getByText('Cargando'));
		expect(screen.getByText('Informaciones del Pokemon:'));

		const nextButton = screen.getByRole('button', { name: 'Siguiente' });
		expect(nextButton.disabled).toBeTruthy();
		// screen.debug();
	});

	test('debe de mostrar un quote', () => {
		useFetch.mockReturnValue({
			data: [{ author: 'Fernando', quote: 'Hola mundo' }],
			hasError: null,
			isLoading: false,
		});

		render(<MultipleCustomHooks />);
		// screen.debug();
		expect(screen.getByText('Anterior').toBeTruthy);
		expect(screen.getByText('Siguiente').toBeTruthy);

		const nextButton = screen.getByRole('button', { name: 'Siguiente' });
		expect(nextButton.disabled).toBeFalsy();
	});

	test('debe llamar la funcion de incrementar', () => {
		useFetch.mockReturnValue({
			data: [{ author: 'Fernando', quote: 'Hola mundo' }],
			hasError: null,
			isLoading: false,
		});

		render(<MultipleCustomHooks />);
		const nextButton = screen.getByRole('button', { name: 'Siguiente' });
		fireEvent.click(nextButton);

		expect(mockIncrement).toHaveBeenCalled();
	});
});
