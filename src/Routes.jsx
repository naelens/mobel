import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Products from './pages/products/Products';
import Cart from './pages/shop-cart/Cart';
import Favorites from './pages/favorites/Favorites';

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Products />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path='/favoritos' element={<Favorites />} />
            </Route>
        </Routes>
    )
}