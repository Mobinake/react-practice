/* eslint-disable no-undef */
export const todoReducer = (initialState = [], action) => {
	switch (action.tipe) {
		case ABC:
			throw new Error('No esta implementada ABC');

		default:
			return initialState;
	}
};
