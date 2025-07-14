import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	//categorias que se muestran
	const [categories, setCategories] = useState(['Vinland Saga']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		// console.log(newCategory);
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			{/* titulo */}
			<h1>GifExpertApp</h1>

			{/* input */}
			<AddCategory onNewCategory={onAddCategory} />

			{/* listado de gif */}
			{categories.map((category) => (
				<GifGrid
					key={category}
					category={category}
				/>
			))}
		</>
	);
};
