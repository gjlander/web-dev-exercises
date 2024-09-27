import { useState, useEffect } from 'react';
import { TodoContext } from './context';

const TodoProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(
        JSON.parse(localStorage.getItem('theme')) || true
    );
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem('todos')) || []
    );
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'completed' && todo.completed) return true;
        if (filter === 'active' && !todo.completed) return true;
        return false;
    });

    return (
        <TodoContext.Provider
            value={{
                isDark,
                setIsDark,
                todos,
                setTodos,
                filter,
                setFilter,
                toggleTodo,
                filteredTodos,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
