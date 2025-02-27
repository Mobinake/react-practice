const initialState = [
	{
		id: 1,
		todo: 'Vencer al Sol',
		done: false,
	},
];

const todoReducer = (state = initialState, action = {}) => {
	if (action.type === 'TODO ADD') {
		return [...state, action.payload];
	}
	return state;
};

let todos = todoReducer();

const newTodo = {
	id: 2,
	todo: 'Vencer a la luna',
	done: false,
};

const addTodoAction = {
	type: 'TODO ADD',
	payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
