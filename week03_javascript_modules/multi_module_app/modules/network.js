const fetchProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        // console.log(data);

        return data;
    } catch (error) {
        console.error(error);
    }
};

export { fetchProducts };
