import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState();

	// cada vez que haya un cambio, obtenerlo
	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	//cada vez que se haga submit(enter), enviar
	const onSubmit = (event) => {
		//prevenir el default de recargar la pagina
		event.preventDefault();

		//quitar espacio en blanco al inicio y final
		if (inputValue.trim().length <= 1) return;

		//setear la categoria despues de los valores ya existentes
		// setCategories((categories) => [inputValue, ...categories]);
		setInputValue('');
		onNewCategory(inputValue.trim());
	};

	return (
		//un formulario que cuando se haga submit, vaya a la funicon onSubmit
		<form onSubmit={onSubmit}>
			<input
				types="text"
				placeholder="Buscar gifs"
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};
