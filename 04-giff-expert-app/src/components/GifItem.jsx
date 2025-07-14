/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

export const GifItem = ({ title, id, url }) => {
	return (
		<div className="card">
			<img
				src={url}
				alt={title}
			/>
			<li key={id}>{title}</li>;
		</div>
	);
};

GifItem.PropTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
