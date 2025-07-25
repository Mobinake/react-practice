/* eslint-disable no-undef */
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook de useFetchGifs', () => {
	test('Debe regresar el estado inicial del hook', () => {
		const { result } = renderHook(() => useFetchGifs('One Punch'));
		const { images, isLoading } = result.current;
		expect(images.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test('debe de retornar un arreglo', async () => {
		const { result } = renderHook(() => useFetchGifs('Goku'));
		await waitFor(
			() => expect(result.current.images.length).toBeGreaterThan(0),
			{ timeout: 1000 }
		);
		const { images, isLoading } = result.current;
		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
