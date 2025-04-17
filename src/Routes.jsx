import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Products from './pages/products/Products';
import Cart from './pages/shop-cart/Cart';
import Favorites from './pages/favorites/Favorites';

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='/favorites' element={<Favorites />} />
            </Route>
        </Routes>
    )
}