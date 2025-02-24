import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle }) => {
	return (
		<>
			<h1 data-testid='test-title'>{title}</h1>
			<p>{subTitle}</p>
			<p>Prueba de comp</p>
		</>
	);
};

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
	title: 'No hay título',
	subTitle: 100,
};
