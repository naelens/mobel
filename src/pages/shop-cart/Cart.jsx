import { useContext } from 'react';
import { CartContext } from '../../contexts/CartProvider';
import { Trash } from 'phosphor-react';
import styles from './Cart.module.css';

export default function Cart() {
    const { item } = useContext(CartContext);

    return(
        <div className={styles.container}>
            {item.lenght === 0 ? (
                <div className={styles.heading}>
                    <h1>Parece que seu carrinho está vazio. Vamos as compras?</h1>
                </div>
            ) : (
                <>
                    <div className={styles.heading}>
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
                                            <h2>Valor total</h2>
                                            <p>R$ {product.salePrice}</p>
                                        </div>
                                        <div className={styles.productRemove}>
                                            <button><Trash size={22} /></button>
                                        </div>  
                                    </div>
                                </section>
                        </div>
                    ))} 

                    <div>
                        <button>oi</button>    
                    </div>  
                </>
            )}
        </div>
    )
}