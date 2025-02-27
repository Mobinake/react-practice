import React from 'react';

// la funcion memo memoriza el componente y solo se renderiza si las propiedades cambian

export const Small = React.memo(({ value }) => {
	console.log('Me volví a llamar :(');

	return <small>{value}</small>;
});
