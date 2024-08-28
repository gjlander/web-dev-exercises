import { useOutletContext } from 'react-router-dom';

const CartBtn = ({ product }) => {
    const { cart, setCart } = useOutletContext();
    const isInCart = cart.some((item) => product.id === item.id);
    // const addToCart = () => {
    //     setCart((prev) => [...prev, product]);
    // };

    if (!isInCart)
        return <button className='btn btn-primary'>Add to cart</button>;

    return (
        <div>
            <button>-</button>
            <p></p>
            <button>+</button>
        </div>
    );
};

export default CartBtn;
