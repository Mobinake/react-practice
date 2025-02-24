const persona = {
	nombre: 'Tony stark',
	edad: 45,
	direccion: {
		ciudad: 'Guaira',
		ci: 1093847,
	},
};

const persona2 = { ...persona };

persona2.nombre = 'peter';

console.log({ persona });
console.log(persona2);
