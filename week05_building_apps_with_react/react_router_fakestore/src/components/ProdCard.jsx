import { Link } from 'react-router';
const ProdCard = ({ title, price, category, image }) => {
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
                    <button className='btn btn-primary'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProdCard;
