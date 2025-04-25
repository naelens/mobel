import { ShoppingCartSimple } from 'phosphor-react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartProvider';

export default function Header() {
    const { item } = useContext(CartContext);

    return (
        <div>
            <header className={styles.header}>
                <nav>
                    <Link to="/">
                        <aside className={styles.aside}>
                            <img src="logo-mobel.svg" alt="" />
                            <h1>Mobel</h1>
                        </aside>
                    </Link>

                    <ul className={styles.shopActions}>
                        <li className={item.length > 0 ? styles.itemAdded : ''}>
                            <Link to="/carrinho"><ShoppingCartSimple size={24}/></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}