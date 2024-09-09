const todoList = document.querySelector('#todo-list');

const fetchAndRenderTodos = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/todos?limit=20'
    );
    const data = await res.json();
    console.log(data);

    data.forEach((todo) => {
        const li = document.createElement('li');
        li.setAttribute('id', todo.id);
        li.textContent = todo.title;
        todo.completed
            ? li.classList.add('bg-green-500', 'border-2')
            : li.classList.add('bg-orange-500', 'border-2');
        todoList.appendChild(li);
    });
};

fetchAndRenderTodos();
