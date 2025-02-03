import { useState, useEffect } from 'react';
import CartTable from '../components/CartTable';
import { getProducts } from '../data/fakeStore';
const Cart = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        (async () => {
            try {
                const allProds = await getProducts();

                setProducts(allProds);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    return (
        <div className='flex flex-col gap-4 px-6'>
            <h2 className='text-6xl'>Your cart</h2>
            <CartTable products={products} />
        </div>
    );
};

export default Cart;
