/* eslint-disable no-undef */
import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Testing a 11 async await', () => {
	test('getimagen debe retornar la url', async () => {
		const url = await getImagen();

		console.log(url);
	});
});
