//funciones
// const saludar = function (nombre) {
//     return `hola, ${nombre}`;
// };

// const saludar2 = (nombre) => {
//     return `hola, ${nombre}`;
// };

// const saludar3 = (nombre) => `hola, ${nombre}`;
// const saludar4 = () => `hola, Guerrero Dragon`;

// console.log(saludar("mobin"));
// console.log(saludar2("goku"));
// console.log(saludar3("vegeta"));
// console.log(saludar4);

// const getUser = () => {
//     return {
//         id: "ASDF",
//         username: "master",
//     };
// };

// const getUser2 = () => ({
//     id: "FDSA",
//     username: "MASTER",
// });

// const user = getUser;
// const user2 = getUser2;

// console.log(user);
// console.log(user2);

// tarea: esta funcion
// function getUsuarioActivo(nombre) {
//     return {
//         id: "1234",
//         name: nombre,
//     };
// }

// const usuarioActivo = getUsuarioActivo("vegeta");
// console.log(usuarioActivo);

// convertir a:
//1. a funcion flecha
//2. retornar objeto implicito
//3. pruebas
const getUsuarioActivoFlecha = (nombre) => ({
	id: '1234',
	name: nombre,
});

console.log(getUsuarioActivoFlecha('goku'));
