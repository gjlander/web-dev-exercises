const form = document.querySelector('form');
const userInput = document.querySelector('#userInput');
const ul = document.querySelector('ul');
const reloadBtn = document.querySelector('#reload');

const quotes = JSON.parse(localStorage.getItem('quotes')) || [];

const makeNewLi = (quote) => {
    const newLi = document.createElement('li');
    const newP = document.createElement('p');
    const newBtn = document.createElement('button');

    newLi.id = quote.id;
    newLi.classList.add('flex', 'gap-4');

    newBtn.textContent = 'Delete';
    newP.textContent = quote.content;

    newLi.appendChild(newP);
    newLi.appendChild(newBtn);
    return newLi;
};
const renderStorage = () => {
    quotes.forEach((q) => {
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
    quotes.unshift(newQuote);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    const newLi = document.createElement('li');
    newLi.id = newQuote.id;
    newLi.textContent = userInput.value;
    ul.insertBefore(newLi, ul.firstChild);
    form.reset();
});

reloadBtn.addEventListener('click', () => {
    window.location.reload();
});
