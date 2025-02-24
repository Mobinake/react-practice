export const GifItem = ({ title, id, url }) => {
	// console.log(image);

	// return <div>grid</div>;
	return (
		<div className='card'>
			<img
				src={url}
				alt={title}
			/>
			<p>{title}</p>
			<li key={id}>{title}</li>;
		</div>
	);
};
