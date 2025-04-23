import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export function CartProvider(props) {
    const [item, setItem] = useState([]);

    const addItemToCart = (product) => {
        const itemExists = item.find(currentProduct => currentProduct.id === product.id);
        if(!itemExists) {
            setItem(prev => [...prev, {...product, quantity: 1}]);
            console.log("Adicionado")
        } else {
            console.log("Produto já adicionado no carrinho")
        }
    }
    
    const removeItemFromList = (productIdToRemove) => {
        const filteredRemovedItems = item.filter(currentItem => {
            return currentItem.id !== productIdToRemove
        });
        setItem(filteredRemovedItems); 
    }

    const increaseQuantity = (cartItemId) => {
        setItem(prev => 
            prev.map(items => 
                items.id === cartItemId
                ? {
                    ...items, 
                    quantity: items.quantity + 1,
                    totalPrice: (item.quantity + 1) * items.salePrice
                }
                : items
            )
        )
    }

    const decreaseQuantity = (cartItemId) => {
        setItem(prev => 
            prev.map(items => 
                items.id === cartItemId
                ? {...items, quantity: Math.max(items.quantity -1, 1)}
                : items
            )
        )
    }

    const calculateTotalPrice = () => {
        return item.reduce((total, items) => {
            return total + (items.quantity * items.salePrice);
        }, 0).toFixed(2); 
    };

    const handlePurchaseMadeMessage = () => {
        alert('Compra realizada com sucesso!');
    };
      
    return  (
        <CartContext.Provider value={
            { 
                item, 
                addItemToCart, 
                removeItemFromList, 
                increaseQuantity, 
                decreaseQuantity, 
                calculateTotalPrice,
                handlePurchaseMadeMessage
            }}>
            {props.children} 
        </CartContext.Provider>
    )
}