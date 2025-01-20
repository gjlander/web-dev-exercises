const addToCart = (product) => {
    const currCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...currCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
};

// adding count
// const addToCart = (product) => {
//     const currCart = JSON.parse(localStorage.getItem('cart')) || [];
//     const itemInCart = currCart.find((prod) => prod.id === product.id);
//     if (itemInCart) {
//         const updatedCart = currCart.map((item) =>
//             item.id === itemInCart.id
//                 ? { ...item, count: item.count + 1 }
//                 : item
//         );
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     } else {
//         const newItem = { ...product, count: 1 };
//         const updatedCart = [...currCart, newItem];
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     }
// };
export { addToCart };
