/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('08-Pruebas import-export', () => {
	test('Deberia de retornar un heroe por id', () => {
		const id = 1;
		const hero = getHeroeById(id);
		expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
	});
	test('Debe de retornar undefined si no hay id', () => {
		const id = 100;
		const hero = getHeroeById(id);
		// forma de detercar null/undefined rapidamente
		expect(hero).toBeFalsy();
	});

	//tarea 1 toEqual con el arreglo filtrado
	test('debe retornar un arreglo con los heroes de DC, length === 3', () => {
		const owner = 'DC';
		const heroes = getHeroesByOwner(owner);
		expect(heroes.length).toBe(3);
		// pruebas duras
		expect(heroes).toEqual([
			{ id: 1, name: 'Batman', owner: 'DC' },
			{ id: 3, name: 'Superman', owner: 'DC' },
			{ id: 4, name: 'Flash', owner: 'DC' },
		]);
		// pruebas flexibles
		expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
	});

	//tarea 2
	test('debe retornar un arreglo con los heroes de Marvel, length ===2', () => {
		const owner = 'Marvel';
		const heroes = getHeroesByOwner(owner);
		expect(heroes.length).toBe(2);
		// pruebas duras
		expect(heroes).toEqual([
			{ id: 2, name: 'Spiderman', owner: 'Marvel' },
			{ id: 5, name: 'Wolverine', owner: 'Marvel' },
		]);
		// pruebas flexibles
		expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
	});
});
