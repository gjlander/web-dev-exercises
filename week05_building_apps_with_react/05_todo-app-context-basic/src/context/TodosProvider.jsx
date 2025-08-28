import { useState } from 'react';
import { TodosContext } from '.';
const TodosProvider = ({ children }) => {
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem('todos')) || []
	);

	const [filter, setFilter] = useState('all');

	const toggleTodo = id => {
		setTodos(prevTodos => {
			const updatedTodos = prevTodos.map(todo => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});
			localStorage.setItem('todos', JSON.stringify(updatedTodos));
			return updatedTodos;
		});
	};

	const filteredTodos = todos.filter(todo => {
		if (filter === 'all') return true;
		if (filter === 'completed' && todo.completed) return true;
		if (filter === 'active' && !todo.completed) return true;
		return false;
	});

	return (
		<TodosContext
			value={{ todos: filteredTodos, setTodos, toggleTodo, filter, setFilter }}
		>
			{children}
		</TodosContext>
	);
};

export default TodosProvider;
