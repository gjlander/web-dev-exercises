const addToCart = (product) => {
    const currCart = JSON.parse(localStorage.getItem('cart')) || [];
    currCart.push(product);
    localStorage.setItem('cart', JSON.stringify(currCart));
};
export { addToCart };
