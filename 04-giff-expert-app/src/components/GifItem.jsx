/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

export const GifItem = ({ title, id, url }) => {
	return (
		<div className="card">
			<img
				src={url}
				alt={title}
			/>
			<p key={id}>{title}</p>
		</div>
	);
};

GifItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
// mejorado con cline
