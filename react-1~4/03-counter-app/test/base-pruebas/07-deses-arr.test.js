/* eslint-disable no-undef */
import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07', () => {
	test('debe retornar un string y un num', () => {
		const [letters, numbers] = retornaArreglo();

		// expect(letters).toBe('ABC');
		// expect(numbers).toBe(123);

		expect(numbers).toEqual(expect.any(Number));
		expect(letters).toEqual(expect.any(String));
	});
});
