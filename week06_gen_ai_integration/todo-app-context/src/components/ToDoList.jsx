import { useTodos } from '../context/context';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
    const { filteredTodos } = useTodos();
    return (
        <ul>
            {filteredTodos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default ToDoList;
