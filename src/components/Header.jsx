import { Heart, ShoppingCartSimple } from 'phosphor-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div>
            <header className={styles.header}>
                <nav>
                    <aside className={styles.aside}>
                        <img src="src/assets/logo-mobel.svg" alt="" />
                        <h1>Mobel</h1>
                    </aside>

                    <ul className={styles.shopActions}>
                        <li>
                            <a href="#"><Heart size={24} /></a>
                        </li>
                        <li>
                            <a href="#"><ShoppingCartSimple size={24}/></a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className={styles.productsHeading}>
                    <h1>Nossos produtos</h1>
                </section>
                
                <section className={styles.productsArea}>
                    <div className={styles.productsCard}>
                        <img src="src/assets/poltrona.jpg" alt="Poltrona" />

                        <div className={styles.productsCardDescription}>
                            <div className={styles.productsPrimaryInfo}>
                                <h2>Poltrona e Puff Base Madeira Menta</h2>
                                <button><Heart size={24} /></button>
                            </div>
                            
                            <div className={styles.productsPrice}>
                                <span>R$ 1.999,00</span>
                                <p>R$ 899,00</p>
                            </div>    
                        </div>

                        <div className={styles.productsAddToCart}>
                            <button className={styles.buttonAddToCart}>
                                Adicionar ao carrinho
                                <ShoppingCartSimple size={20}/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.productsCard}>
                        <img src="src/assets/sofa.webp" alt="Sofa" />

                        <div className={styles.productsCardDescription}>
                            <div className={styles.productsPrimaryInfo}>
                                <h2>Sofá Viena de Madeira Suede Bege</h2>
                                <button><Heart size={24} /></button>
                            </div>
                            
                            <div className={styles.productsPrice}>
                                <span>R$ 2.100,00</span>
                                <p>R$ 1.290,00</p>
                            </div>    
                        </div>

                        <div className={styles.productsAddToCart}>
                            <button className={styles.buttonAddToCart}>
                                Adicionar ao carrinho
                                <ShoppingCartSimple size={20}/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.productsCard}>
                        <img src="src/assets/cadeira.webp" alt="Cadeira" />

                        <div className={styles.productsCardDescription}>
                            <div className={styles.productsPrimaryInfo}>
                                <h2>Cadeira de escritório Bytes Rosa</h2>
                                <button><Heart size={24} /></button>
                            </div>
                            
                            <div className={styles.productsPrice}>
                                <span>R$ 592,90</span>
                                <p>R$ 320,00</p>
                            </div>    
                        </div>

                        <div className={styles.productsAddToCart}>
                            <button className={styles.buttonAddToCart}>
                                Adicionar ao carrinho
                                <ShoppingCartSimple size={20}/>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}