const form = document.querySelector('form');
const userInput = document.querySelector('#userInput');
const ul = document.querySelector('ul');
const reloadBtn = document.querySelector('#reload');

const makeNewLi = (quote) => {
    const newLi = document.createElement('li');
    const newP = document.createElement('p');
    const newBtn = document.createElement('button');

    newLi.id = quote.id;
    newLi.classList.add(
        'flex',
        'gap-4',
        'items-baseline',
        'px-4',
        'justify-between'
    );

    newP.textContent = quote.content;
    newBtn.textContent = 'Delete';
    newBtn.classList.add(
        'mt-5',
        'px-4',
        'py-2',
        'bg-red-500',
        'hover:bg-red-400',
        'text-white',
        'rounded'
    );
    newBtn.addEventListener('click', (e) => {
        const currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];

        const updatedTasks = currentTasks.filter(
            (q) => q.id !== e.target.parentElement.id
        );
        // console.log(updatedQuotes);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        e.target.parentElement.remove();
    });

    newLi.appendChild(newP);
    newLi.appendChild(newBtn);
    return newLi;
};
const renderStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((q) => {
        const newLi = makeNewLi(q);
        ul.appendChild(newLi);
    });
};
renderStorage();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!userInput.value) return alert('Cannot submit an empty quote!');
    const newQuote = {
        id: 'task-' + crypto.randomUUID(),
        content: userInput.value,
    };
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.unshift(newQuote);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const newLi = makeNewLi(newQuote);
    ul.insertBefore(newLi, ul.firstChild);
    form.reset();
});

reloadBtn.addEventListener('click', () => {
    window.location.reload();
});
