/* eslint-disable no-undef */
import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
	test('getSaludo debe retornar Hola + {nombre}', () => {
		const nombre = 'Fernando';
		const message = getSaludo(nombre);

		expect(message).toBe(`Hola ${nombre}`);
	});
});
