import { useTodos } from '../context';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
	const { todos } = useTodos();
	return (
		<ul>
			{todos.map(todo => (
				<ToDoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};

export default ToDoList;
