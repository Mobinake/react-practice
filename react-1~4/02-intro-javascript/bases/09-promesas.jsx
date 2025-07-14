// import { getHeroeById } from '../bases/08-imp-exp';

// const promesa = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('2 segundos después');
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         resolve(heroe);
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('Promesa resuelta', heroe);
// })
//     .catch(err => console.warn(err))

import { getHeroeById } from '../bases/08-imp-exp';

const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id)
            if (heroe == undefined) {
                reject('No se pudo encontrar el héroe con id ' + id);
            }
            else {
                console.log(heroe);
                resolve(heroe);
            }
        }, 2000);

    });
}

getHeroByIdAsync(2)
    .then(console.log)
    .catch(console.warn);