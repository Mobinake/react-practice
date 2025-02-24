import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

/* eslint-disable no-undef */
describe('Pruebas 07-deses-arr', () => {
	test('Debe devolver la desestructuracion de un objeto', () => {
		const [letters, numbers] = retornaArreglo();
		expect(letters).toBe('ABC');
		expect(numbers).toBe(123);

		expect(typeof letters).toBe('string');
		expect(typeof numbers).toBe('number');

		expect(letters).toEqual(expect.any(String));
	});
});
