import { fetchProducts } from './network.js';
import { addToCart } from './storage.js';
const productsContainer = document.querySelector('#products-container');

const allProducts = await fetchProducts();

const renderProducts = () => {
    allProducts.forEach((product) => {
        const card = document.createElement('div');
        card.id = product.id;
        card.className = 'card bg-base-100 w-96 shadow-xl';

        const figure = document.createElement('figure');
        figure.className = 'h-1/2';
        const img = document.createElement('img');
        img.className = 'w-full h-full';
        img.src = product.image;
        img.alt = product.title;
        figure.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const cardTitle = document.createElement('h2');
        cardTitle.className = 'card-title';
        cardTitle.textContent = product.title;
        cardBody.appendChild(cardTitle);
        const price = document.createElement('p');
        price.textContent = product.price;
        cardBody.appendChild(price);

        const cardActions = document.createElement('div');
        cardActions.className = 'card-actions justify-end';
        const addBtn = document.createElement('button');
        addBtn.className = 'btn btnprimary';
        addBtn.id = product.id;
        addBtn.textContent = 'Add to cart';
        addBtn.addEventListener('click', () => {
            addToCart(allProducts, product.id);
        });
        cardActions.appendChild(addBtn);

        // card.textContent = product.title;
        card.appendChild(figure);
        card.appendChild(cardBody);
        card.appendChild(cardActions);

        productsContainer.appendChild(card);
    });
};

export { renderProducts };
