import { useReducer } from 'react';
import { TodosContext, todosReducer } from '.';
const TodosProvider = ({ children }) => {
	// instead of useState, we use useReducer instead
	const [todosState, todosDispatch] = useReducer(
		todosReducer /* the first argument is the dispatch function */,
		/*the second argument is the initial state. here we have consolidated our todos and filter state into a single object */
		{
			todos: JSON.parse(localStorage.getItem('todos')) || [],
			filter: 'all'
		}
	);

	const filteredTodos = todosState?.todos.filter(todo => {
		if (todosState.filter === 'all') return true;
		if (todosState.filter === 'completed' && todo.completed) return true;
		if (todosState.filter === 'active' && !todo.completed) return true;
		return false;
	});

	return (
		<TodosContext
			value={{ filter: todosState.filter, todos: filteredTodos, todosDispatch }}
		>
			{children}
		</TodosContext>
	);
};

export default TodosProvider;
