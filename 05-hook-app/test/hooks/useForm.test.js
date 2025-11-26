/* eslint-disable no-undef */
import { renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';
import { act } from 'react';

describe('Pruebas en UseForm', () => {
	const initialForm = {
		name: 'Fernando',
		email: 'juan@gmail.com',
	};

	test('debe regresar la informacion por defecto', () => {
		const { result } = renderHook(() => useForm(initialForm));
		expect(result.current).toEqual({
			name: 'Fernando',
			email: 'gmail.com',
			formState: initialForm,
			onInputChange: expect.any(Function),
			onResetForm: expect.any(Function),
		});
	});

	test('debe de cambiar el nombre del formulario', () => {
		const newValue = 'Jose';
		//montar hook
		const { result } = renderHook(() => useForm(initialForm));
		const { onInputChange } = result.current;

		act(() => {
			onInputChange({ target: { name: 'name', value: newValue } });
		});

		expect(result.current.name).toEqual(newValue);
		expect(result.current.formState.name).toEqual(newValue);
	});

	test('debe de resetear el formulario', () => {
		const newValue = 'Jose';
		const { result } = renderHook(() => useForm(initialForm));
		const { onInputChange, onResetForm } = result.current;

		act(() => {
			onInputChange({ target: { name: 'name', value: newValue } });
			onResetForm(result);
		});

		expect(result.current.name).toEqual(initialForm.name);
		expect(result.current.formState.name).toEqual(initialForm.name);
	});
});
