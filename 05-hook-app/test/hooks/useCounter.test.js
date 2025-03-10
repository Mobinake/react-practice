/* eslint-disable no-undef */
import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Test sobre useCounter', () => {
	test('debe retornar los valores por defecto', () => {
		const { result } = renderHook(() => useCounter());
		const { counter, decrement, increment, reset } = result.current;

		expect(counter).toBe(10);
		expect(decrement).toEqual(expect.any(Function));
		expect(increment).toEqual(expect.any(Function));
		expect(reset).toEqual(expect.any(Function));
	});

	test('debe de generar el counter con el valor de 100 que enviamos', () => {
		const { result } = renderHook(() => useCounter(100));
		const { counter } = result.current;
		expect(counter).toBe(100);
	});

	test('debe de incrementar el contador', () => {
		const { result } = renderHook(() => useCounter(100));
		const { increment } = result.current;
		act(() => {
			increment(1);
		});
		expect(result.current.counter).toBe(101);
	});
	test('debe de decrementar el contador', () => {
		const { result } = renderHook(() => useCounter(100));
		const { decrement } = result.current;
		act(() => {
			decrement(1);
		});
		expect(result.current.counter).toBe(99);
	});
	test('debe de resetear el contador', () => {
		const { result } = renderHook(() => useCounter(100));
		const { decrement, reset } = result.current;
		act(() => {
			decrement(11);
			reset();
		});
		expect(result.current.counter).toBe(100);
	});
});
