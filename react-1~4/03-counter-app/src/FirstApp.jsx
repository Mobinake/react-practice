import PropTypes from 'prop-types';

const newMessage = {
	message: 'Hola, react.',
	title: 'Mobin',
};

export function FirstApp({ title, subtitle }) {
	return (
		<>
			{/* se puede colocar cualquier codigo de JS aqui, excepto funciones.
                aqui lo que hace es convertir la respuesta en JSON, para que no se devuelva como funcion*/}
			<code>{JSON.stringify(newMessage)}</code>
			<h1 data-testid='test-title'>{title}</h1>
			<h2>{subtitle}</h2>
		</>
	);
}

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
	title: 'No hay titulo',
	subtitle: 'No hay subtitulo',
};
