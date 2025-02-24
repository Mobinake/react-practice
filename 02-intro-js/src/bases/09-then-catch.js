import { getHeroeById } from './bases/08-impexp-funcition';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //tarea: importar getHeroeById
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         // resolve(heroe);
//         reject("No heroe");
//     }, 2000);
// });

// promesa
//     .then(() => {
//         console.log("promesa");
//     })
//     .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			//tarea: importar getHeroeById
			const heroe = getHeroeById(id);
			// console.log(p1);
			// resolve(heroe);
			resolve(heroe);
			reject('No heroe');
		}, 2);
	});
};

getHeroeByIdAsync(2).then(console.log).catch(console.warn);
