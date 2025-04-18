import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export function CartProvider(props) {
    const [item, setItem] = useState([]);

    const AddItemToCart = (product) => {
        setItem(prev => [...prev, product]);
        console.log("adicionado")
    }

    const RemoveItemFromList = (productId) => {
        const filteredRemovedItems = item.filter(currentItem => {
            return currentItem.id !== productId
        });
        setItem(filteredRemovedItems); 
    }

    return  (
        <CartContext.Provider value={{ item, AddItemToCart, RemoveItemFromList }}>
            {props.children} 
        </CartContext.Provider>
    )
}