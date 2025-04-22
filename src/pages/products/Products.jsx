import { useContext } from 'react';
import { CartContext } from '../../contexts/CartProvider';
import { ShoppingCartSimple } from 'phosphor-react';
import styles from './Products.module.css';

const products = [
    {
        id: 1,
        name: "Poltrona e Puff Base Madeira Menta",
        price: 1999.00,
        salePrice: 899.00,
        imageUrl: "src/assets/poltrona.jpg",
        quantity: 1,
    },
    {
        id: 2,
        name: "Sofá Viena de Madeira Suede Bege",
        price: 2100.00,
        salePrice: 1290.00,
        imageUrl: "src/assets/sofa.webp",
        quantity: 1,
    },
    {
        id: 3,
        name: "Cadeira de escritório Bytes Rosa",
        price: 592.99,
        salePrice: 320.00,
        imageUrl: "src/assets/cadeira.webp",
        quantity: 1,
    }
]

export default function Products() {
    const { addItemToCart } = useContext(CartContext);

    return (
        <div>
            <main>
                <section className={styles.productsHeading}>
                    <h1>Nossos produtos</h1>
                </section>
                
                <section className={styles.productsArea}>
                    {products.map(product => (
                        <div key={product.id} className={styles.productsCard}>
                            <img src={product.imageUrl} alt="Poltrona" />

                            <div className={styles.productsCardDescription}>
                                <div className={styles.productsPrimaryInfo}>
                                    <h2>{product.name}</h2>
                                </div>
                                
                                <div className={styles.productsPrice}>
                                    <span>R$ {product.price}</span>
                                    <p>R$ {product.salePrice}</p>
                                </div>    
                            </div>

                            <div className={styles.productsAddToCart}>
                                <button onClick={() => addItemToCart(product)} className={styles.buttonAddToCart}>
                                    Adicionar ao carrinho
                                    <ShoppingCartSimple size={20}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    )
}