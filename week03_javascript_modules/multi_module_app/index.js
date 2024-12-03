import { fetchProducts } from './modules/network.js';
import { renderProducts } from './modules/ui.js';

const allProducts = await fetchProducts();

renderProducts(allProducts);
