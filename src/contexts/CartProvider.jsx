import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export function CartProvider(props) {
    const [item, setItem] = useState([]);

    const AddItemToCart = (product) => {
        setItem(prev => [...prev, product]);
        console.log("adicionado")
    }

    return  (
        <CartContext.Provider value={{ item, AddItemToCart }}>
            {props.children} 
        </CartContext.Provider>
    )
}