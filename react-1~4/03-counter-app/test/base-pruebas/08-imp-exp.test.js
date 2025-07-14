/* eslint-disable no-undef */
import {
	getHeroeById,
	getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

import { heroes } from '../../src/data/heroes';

describe('Test a 08 imp exp', () => {
	test('getheroebyid debe retornar el heroes por id', () => {
		const id = 1;
		const hero = getHeroeById(id);
		expect(hero).toEqual({
			id: 1,
			name: 'Batman',
			owner: 'DC',
		});
	});

	test('getheroebyid debe retornar undefined ', () => {
		const id = 100;
		const hero = getHeroeById(id);
		expect(hero).toBeFalsy();
	});

	test('getheroesByOwner de DC, length ===3, toequal al arreglofiltrado', () => {
		const owner = 'DC';
		const heroes = getHeroesByOwner(owner);
		expect(heroes.length === 3).toBeTruthy();
		expect(heroes).toEqual(heroes.filter(() => owner));
	});
	test('getheroesByOwner de Marvel, length ===2, toequal al arreglofiltrado', () => {
		const owner = 'Marvel';
		const heroes = getHeroesByOwner(owner);
		expect(heroes.length === 2).toBeTruthy();
		expect(heroes).toEqual(heroes.filter(() => owner));
	});
});
