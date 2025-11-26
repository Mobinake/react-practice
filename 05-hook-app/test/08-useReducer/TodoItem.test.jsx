/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en el componente TodoItem', () => {
	const todo = {
		id: 1,
		description: 'Piedra de comida',
		done: false,
	};

	const onDeleteTodoMock = jest.fn();
	const onToggleTodoMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	// test('debe mostrar el todo pendiente de completar', () => {
	// 	render(
	// 		<TodoItem
	// 			todo={todo}
	// 			onDeleteTodo={onDeleteTodoMock}
	// 			onToggleTodo={onToggleTodoMock}
	// 		/>
	// 	);
	// 	const liElement = screen.getByRole('listitem');
	// 	expect(liElement.className).toBe(
	// 		'list-group-item d-flex justify-content-between'
	// 	);
	// 	const spanElement = screen.getByLabelText('span');
	// 	expect(spanElement.className).toContain('align-self-center');
	// 	expect(spanElement.className).not.toContain(
	// 		'text-decoration-line-through'
	// 	);
	// });

	// test('debe mostrar el todo completado', () => {
	// 	todo.done = true;
	// 	render(
	// 		<TodoItem
	// 			todo={todo}
	// 			onDeleteTodo={onDeleteTodoMock}
	// 			onToggleTodo={onToggleTodoMock}
	// 		/>
	// 	);
	// 	const spanElement = screen.getByLabelText('span');
	// 	expect(spanElement.className).toContain('text-decoration-line-through');
	// });

	// test('el spam debe llamar toggle todo al click', () => {
	// 	render(
	// 		<TodoItem
	// 			todo={todo}
	// 			onDeleteTodo={onDeleteTodoMock}
	// 			onToggleTodo={onToggleTodoMock}
	// 		/>
	// 	);
	// 	const spanElement = screen.getByLabelText('span');

	// 	fireEvent.click(spanElement);
	// 	expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
	// });

	test('el spam debe de llamar el deleteTodo', () => {
		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);
		const deleteButton = screen.getByText('Borrar');

		fireEvent.click(deleteButton);
		expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
