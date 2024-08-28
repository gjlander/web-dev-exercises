import { Link, useOutletContext } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
const Home = () => {
    const { products } = useOutletContext();
    console.log(products);

    return (
        <div>
            <div className='flex flex-wrap justify-center gap-8'>
                {products.map((product) => (
                    <Link to={`store/${product.id}`} key={product.id}>
                        <ItemCard product={product} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
