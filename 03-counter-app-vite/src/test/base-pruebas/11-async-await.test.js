/* eslint-disable no-undef */
import { getImagen } from '../../base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
	test('getImagen debe retornar la url de la imagen', async () => {
		const url = await getImagen();
		console.log(url);
	});
});
