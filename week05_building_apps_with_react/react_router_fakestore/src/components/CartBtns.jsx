import { useOutletContext } from 'react-router';
import { addToCart, removeFromCart } from '../utils/cartUtils';
const CartBtns = ({ product, count }) => {
    // console.log('prodInCart', prodInCart);
    const { cart, setCart } = useOutletContext();
    const handleAddToCart = () => {
        const newCart = addToCart(cart, product);
        setCart(newCart);
    };
    const handleRemoveFromCart = () => {
        const newCart = removeFromCart(cart, product);
        setCart(newCart);
    };
    return (
        <div className='flex gap-2 items-baseline'>
            <button onClick={handleRemoveFromCart} className='btn btn-primary'>
                -
            </button>
            <span>{count}</span>
            <button onClick={handleAddToCart} className='btn btn-primary'>
                +
            </button>
        </div>
    );
};

export default CartBtns;
