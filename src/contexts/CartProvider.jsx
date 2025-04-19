import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export function CartProvider(props) {
    const [item, setItem] = useState([]);
    const [inputQuantity, setInputQuantity] = useState(1);

    const addItemToCart = (product) => {
        const itemExists = item.find(currentProduct => currentProduct.id === product.id);
        if(!itemExists) {
            setItem(prev => [...prev, product]);
            console.log("Adicionado")
        } else {
            console.log("Produto já adicionado no carrinho")
        }
    }

    const removeItemFromList = (productId) => {
        const filteredRemovedItems = item.filter(currentItem => {
            return currentItem.id !== productId
        });
        setItem(filteredRemovedItems); 
    }

    const updateItemQuantity = () => {
        setInputQuantity(prevQuantity => prevQuantity + 1)
        console.log("clicou")
    }

    return  (
        <CartContext.Provider value={{ item, addItemToCart, removeItemFromList, inputQuantity, updateItemQuantity }}>
            {props.children} 
        </CartContext.Provider>
    )
}