export const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
	return {
		nombre: nombre,
		nombreClave: clave,
		anios: edad,
		rango: rango,
		latlng: {
			lat: 14.1232,
			lng: -12.3232,
		},
	};
};
