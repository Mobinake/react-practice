/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';

export const Hijo = React.memo(({ numero, incrementar }) => {
	return (
		<button
			className="btn btn-primary mr-3"
			onClick={() => incrementar(numero)}
		>
			{numero}
		</button>
	);
});
