const form = document.querySelector('form');
const userInput = document.querySelector('#userInput');
const ul = document.querySelector('ul');
const reloadBtn = document.querySelector('#reload');

const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
const renderStorage = () => {
    quotes.forEach((q) => {
        const newLi = document.createElement('li');
        newLi.textContent = q;
        ul.appendChild(newLi);
    });
};
renderStorage();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!userInput.value) return alert('Cannot submit an empty quote!');
    quotes.unshift(userInput.value);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    const newLi = document.createElement('li');
    newLi.textContent = userInput.value;
    ul.insertBefore(newLi, ul.firstChild);
    form.reset();
});

reloadBtn.addEventListener('click', () => {
    window.location.reload();
});
