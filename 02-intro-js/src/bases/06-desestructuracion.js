// desestructuracion/ asignacion desestructurante

const persona = {
	nombre: 'Tony',
	edad: 24,
	clave: 'Ironman',
	rango: 'soldado',
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const personaContext = ({ nombre, clave, edad, rango = 'Capitan' }) => {
	// const { nombre, edad, clave } = usuario;
	// console.log(nombre, rango, clave, edad);
	return {
		nombreClave: clave,
		anio: edad,
		latlng: {
			lat: 1234.1234,
			lng: -1234.1234,
		},
	};
};

const {
	nombreClave,
	anio,
	latlng: { lat, lng },
} = personaContext(persona);

console.log(nombreClave, anio, lat, lng);
