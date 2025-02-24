// import { heroes } from "./data/heroes";
// import heroes from "./data/heroes";

import heroes from '../data/heroes';

export const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id);
// return heroes.find((heroes) => {
//     if (heroes.id === id) {
//         return true;
//     } else {
//         return false;
//     }
// });

export const getHeroeByOwner = (owner) =>
	heroes.filter((heroes) => heroes.owner === owner);

// console.log(getHeroeById(2));
// console.log(getHeroeByOwner("DC"));
// console.log(owners);
