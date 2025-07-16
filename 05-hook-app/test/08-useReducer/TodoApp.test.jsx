/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en TodoApp', () => {
	useTodos.mockReturnValue({
		todos: [
			{
				id: 1,
				description: 'todo1',
				done: false,
			},
			{
				id: 2,
				description: 'todo2',
				done: true,
			},
		],
		todosCount: 2,
		pendingTodosCount: 1,
		handleDeleteTodo: jest.fn(),
		handleToggleTodo: jest.fn(),
		handleNewTodo: jest.fn(),
	});

	test('debe de mostrar el componente correctamente', () => {
		render(<TodoApp />);
		// screen.debug();
		expect(screen.getByText('todo1')).toBeTruthy;
		expect(screen.getByText('todo2')).toBeTruthy;
		expect(screen.getByRole('textbox')).toBeTruthy;
	});
});
