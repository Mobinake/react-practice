import { getHeroeById } from './08-imp-exp';

export const getHeroeByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Tarea
			// importen el
			const p1 = getHeroeById(id);
			if (p1) {
				resolve(p1);
			} else {
				reject('No se pudo encontrar el heroe');
			}
		}, 1000);
	});
};

getHeroeByIdAsync(1).then().catch(console.warn);
