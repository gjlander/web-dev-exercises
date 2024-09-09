const addToCart = (array, id) => {
    const currCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = array.find((prod) => prod.id === id);
    currCart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(currCart));
};
export { addToCart };
