// const personajes = ["frieren", "fern", " stark"];
// const [, , p3] = personajes;
// console.log(p3);

// const retornaArreglo = () => {
//     return ["abc", 123];
// };
// const [letras, numeros] = retornaArreglo();
// console.log(letras, numeros);

//tarea
//1. el primer valor del arr sera nombre
//2. el primer valor del arr sera setnombre
const userState = (valor) => {
	return [
		valor,
		() => {
			console.log('hola');
		},
	];
};

//
const [nombre, setNombre] = userState('fern');

console.log(nombre);
setNombre();
