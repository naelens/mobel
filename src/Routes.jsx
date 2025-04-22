import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Products from './pages/products/Products';
import Cart from './pages/shop-cart/Cart';

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Products />} />
                <Route path="/carrinho" element={<Cart />} />
            </Route>
        </Routes>
    )
}