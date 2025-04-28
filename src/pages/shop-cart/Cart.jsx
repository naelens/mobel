import { useContext } from 'react';
import { CartContext } from '../../contexts/CartProvider';
import { Link } from 'react-router-dom';
import { Trash } from 'phosphor-react';
import styles from './Cart.module.css';

export default function Cart() {
    const { item, removeItemFromList, increaseQuantity, decreaseQuantity, calculateTotalPrice, handlePurchaseMadeMessage } = useContext(CartContext);

    return(
        <div className={styles.container}>
            {item.length === 0 ? (
                <div className={styles.headingEmptyCart}>
                    <img src="empty-cart-illustration.svg" alt="Carrinho vazio" />
                    <h1>Seu carrinho de compras está vazio!</h1>
                    <Link to={"/"}>Comprar agora.</Link>
                </div>
            ) : (
                <>
                    <div className={styles.headingYourCart}>
                        <h1>Seu carrinho</h1>
                    </div>
                    
                    <div className={styles.containerCartPayment}>
                        {item.map((product, index) => (
                            <div key={index} className={styles.cartContainer}>
                                <section className={styles.cartProduct}>
                                            <div className={styles.productImage}>
                                                <img src={product.imageUrl} />
                                            </div>
                                            
                                            <div className={styles.productInfo}>
                                                <div className={styles.productName}>
                                                    <h2>{product.name}</h2>
                                                    <p>R$ {(product.quantity * product.salePrice).toFixed(2)}</p>

                                                    <div className={styles.buttonActions}>
                                                        <div className={styles.buttonQuantity}>
                                                            <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                                                <p>{product.quantity}</p>
                                                            <button onClick={() => increaseQuantity(product.id)}>+</button>
                                                        </div>
                        
                                                        <div className={styles.productRemove}>
                                                            <button onClick={() => {removeItemFromList(product.id)}}><Trash size={22} /></button>
                                                        </div> 
                                                    </div> 
                                                </div>
                                            </div>
                                </section>
                            </div>
                        ))}
                        <section className={styles.checkout}>
                            <h1>Detalhes do pagamento</h1>

                            <div className={styles.paymentInfos}>
                                <div>
                                    <span>Subtotal: </span>
                                    <p>R$ {calculateTotalPrice()}</p>
                                </div>
                                <div>
                                    <span>Frete:</span>
                                    <p>Grátis</p>
                                </div>              
                            </div>

                            <div className={styles.cartTotal}>
                                <span>Valor total: </span>
                                <p>R$ {calculateTotalPrice()}</p>
                            </div>
            
                            <div className={styles.checkoutButton}>
                                <button onClick={handlePurchaseMadeMessage}>Finalizar compra</button>    
                            </div>
                        </section>
                    </div>
                </>
            )}
        </div>
    )
}