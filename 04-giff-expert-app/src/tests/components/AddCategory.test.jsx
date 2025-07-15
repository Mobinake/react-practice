/* eslint-disable no-undef */
import { AddCategory } from '../../components/AddCategory';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Test de AddCategory', () => {
	test('debe de cambiar el valor del textbox', () => {
		render(<AddCategory onNewCategory={() => {}} />);

		const input = screen.getByRole('textbox');
		fireEvent.input(input, { target: { value: 'Sadmen' } });
		expect(input.value).toBe('Sadmen');
	});

	test('debe de llamar onNewCategory si el input tiene un valor', () => {
		const inputValue = 'Sadmen';
		//const jest.fn simulamos una función
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);
		expect(input.value).toBe('');
		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

	test('no llamar a onNewCategory si el input esta vacio', () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);

		const form = screen.getByRole('form');

		fireEvent.submit(form);

		expect(onNewCategory).toHaveBeenCalledTimes(0);
		expect(onNewCategory).not.toHaveBeenCalled();
	});
});
