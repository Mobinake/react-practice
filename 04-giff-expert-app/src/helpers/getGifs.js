import.meta.env.VITE_API_KEY; // Ensure VITE_API_KEY is defined in .env

export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${
		import.meta.env.VITE_API_KEY
	}&q=${category}&limit=10`;
	try {
		const resp = await fetch(url);
		if (!resp.ok) {
			throw new Error(`HTTP error! status: ${resp.status}`);
		}
		const { data = [] } = await resp.json();
		const gifs = data.map((img) => ({
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		}));
		return gifs;
	} catch (error) {
		console.error('Error fetching GIFs:', error);
		return []; // Return empty array on error
	}
};
// mejorado con cline
