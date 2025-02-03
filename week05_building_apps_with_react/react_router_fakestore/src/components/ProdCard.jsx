import { Link, useOutletContext } from 'react-router';
import { addToCart, checkInCart } from '../utils/cartUtils';
import CartBtns from './CartBtns';
const ProdCard = ({ product }) => {
    const { title, price, category, image } = product;
    const { cart, setCart } = useOutletContext();
    const prodInCart = checkInCart(cart, product);
    const handleAddToCart = () => {
        const newCart = addToCart(cart, product);
        setCart(newCart);
    };
    return (
        <div className='card glass'>
            <figure className='bg-white h-48 p-3'>
                <img
                    className='object-contain h-full w-full'
                    src={image}
                    alt={title}
                />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p>{price.toFixed(2)} €</p>
                <div className='card-actions justify-end items-baseline'>
                    <Link
                        className='underline hover:text-purple-500'
                        to={`categories/${category}`}
                    >
                        see more in {category}
                    </Link>
                    {prodInCart ? (
                        <CartBtns product={product} count={prodInCart.count} />
                    ) : (
                        <button
                            onClick={handleAddToCart}
                            className='btn btn-primary'
                        >
                            Add to cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProdCard;
