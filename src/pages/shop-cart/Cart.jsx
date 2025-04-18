import { useContext } from 'react';
import { CartContext } from '../../contexts/CartProvider';
import { Link } from 'react-router-dom';
import { Trash } from 'phosphor-react';
import styles from './Cart.module.css';

export default function Cart() {
    const { item, RemoveItemFromList } = useContext(CartContext);

    return(
        <div className={styles.container}>
            {item.length === 0 ? (
                <div className={styles.headingEmptyCart}>
                    <img src="src/assets/empty-cart-illustration.svg" alt="Carrinho vazio ilustração" />
                    <h1>Seu carrinho de compras está vazio!</h1>
                    <Link to={"/produtos"}>Comprar agora.</Link>
                </div>
            ) : (
                <>
                    <div className={styles.headingYourCart}>
                        <h1>Seu carrinho</h1>
                    </div>
                        
                    {item.map((product, index) => (
                            <div key={index} className={styles.cartContainer}>
                                <section className={styles.cartProduct}>
                                        <div className={styles.productImage}>
                                            <img src={product.imageUrl} />
                                        </div>
                                        <div className={styles.productInfo}>
                                            <div className={styles.productName}>
                                                <h2>Produto</h2>
                                                <p>{product.name}</p>
                                            </div>
                                            <div>
                                                <h2>Preço unitário</h2>
                                                <p>R$ {product.salePrice}</p>
                                            </div>
                                            <div className={styles.productQuantity}>
                                                <h2>Quantidade</h2>
                                                <div className={styles.quantityInput}>
                                                    <button>-</button>
                                                        <input 
                                                            type="number" 
                                                            value="0" 
                                                            min="1"
                                                        />
                                                    <button>+</button>
                                                </div>
                                            </div>
                                            <div className={styles.productTotal}>
                                                <h2>Preço total</h2>
                                                <p>R$ {product.salePrice}</p>
                                            </div>
                                            <div className={styles.productRemove}>
                                                <button onClick={() => {RemoveItemFromList(product.id)}}><Trash size={22} /></button>
                                            </div>  
                                        </div>
                                </section>
                            </div>
                    ))} 

                    <div className={styles.cartTotal}>
                        <span>Valor total da compra: </span>
                        <p>R$ 1.999,00</p>
                    </div>
        
                    <div className={styles.buttonBuyProduct}>
                        <button>Finalizar compra</button>    
                    </div>  
                </>
            )}
        </div>
    )
}