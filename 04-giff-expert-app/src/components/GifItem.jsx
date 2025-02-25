export const GifItem = ({ title, id, url }) => {
	return (
		<div className='card'>
			<img
				src={url}
				alt={title}
			/>
			<li key={id}>{title}</li>;
		</div>
	);
};
