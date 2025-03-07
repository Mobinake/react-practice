/* eslint-disable react/prop-types */
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], onDeleteTodo }) => {
	return (
		<ul className='list-group '>
			{todos.map((todo) => (
				<TodoItem
					key={todos.id}
					todo={todo}
					onDeleteTodo={onDeleteTodo}
				/>
			))}
		</ul>
	);
};
