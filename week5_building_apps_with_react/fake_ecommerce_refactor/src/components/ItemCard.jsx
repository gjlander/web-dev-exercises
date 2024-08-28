import { Link } from 'react-router-dom';
import CartBtn from './CartBtn';
const ItemCard = ({ product }) => {
    const { image, title, price, category } = product;
    return (
        <div className='card glass w-full h-full'>
            <figure className='h-3/4'>
                <img className='w-full h-full' src={image} alt={title} />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p>Price: ${price.toFixed(2)}</p>
                <div className='card-actions justify-end items-center'>
                    <Link>{category}</Link>
                    <CartBtn product={product} />
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
