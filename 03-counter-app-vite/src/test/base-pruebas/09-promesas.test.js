/* eslint-disable no-undef */
import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';

describe('09-Test promesas', () => {
	test('getHeroeByIdAsync debe retornar un hero por ID', (done) => {
		const id = 1;
		getHeroeByIdAsync(id).then((hero) => {
			expect(hero).toEqual({
				id: 1,
				name: 'Batman',
				owner: 'DC',
			});
			done();
		});
	});

	// test('getHeroeByIdAsync debe retornar un error si no existe el heroe', (done) => {
	// 	const id = 100;

	// 	getHeroeByIdAsync(id)
	// 		.then((hero) => {
	// 			expect(hero).toBeFalsy();
	// 			done();
	// 		})
	// 		.catch((error) => {
	// 			expect(error).toBe('No se pudo encontrar el heroe ' + id);
	// 			done();
	// 		});
	// });
});
