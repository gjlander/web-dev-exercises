import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

const getAllProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const MainLayout = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        getAllProducts()
            .then((array) => setProducts(array))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div>
            <Navbar cart={cart} />
            <Outlet context={{ products, cart, setCart }} />
        </div>
    );
};

export default MainLayout;
