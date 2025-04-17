import { Trash } from 'phosphor-react';
import styles from './Cart.module.css';

export default function Cart() {
    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Seu carrinho</h1>
            </div>

            <div className={styles.cartContainer}>
                <section className={styles.cartProduct}>
                    <div className={styles.productImage}>
                        <img src="src/assets/poltrona.jpg" alt="Poltrona" />
                    </div>
                    <div className={styles.productInfo}>
                        <div className={styles.productName}>
                            <h2>Produto</h2>
                            <p>Poltrona e Puff Base Madeira Menta</p>
                        </div>
                        <div>
                            <h2>Preço unitário</h2>
                            <p>R$ 599,00</p>
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
                            <p>R$ 599,00</p>
                        </div>
                        <div className={styles.productRemove}>
                            <button><Trash size={22} /></button>
                        </div>  
                    </div>
                </section>
            </div>
        </div>
    )
}