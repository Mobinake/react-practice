/* eslint-disable react/prop-types */
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return;
		setInputValue('');
		onNewCategory(inputValue.trim());
	};

	return (
		<form
			onSubmit={onSubmit}
			aria-label='form'>
			<input
				type='text'
				placeholder='BuscarGifs'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};

AddCategory.protoTypes = { onNewCategory: PropTypes.func.isRequired };
