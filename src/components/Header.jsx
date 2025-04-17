import { Heart, ShoppingCartSimple } from 'phosphor-react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div>
            <header className={styles.header}>
                <nav>
                    <Link to="/products">
                        <aside className={styles.aside}>
                            <img src="src/assets/logo-mobel.svg" alt="" />
                            <h1>Mobel</h1>
                        </aside>
                    </Link>

                    <ul className={styles.shopActions}>
                        <li>
                            <Link to="/favorites"><Heart size={24} /></Link>
                        </li>
                        <li>
                            <Link to="/cart"><ShoppingCartSimple size={24}/></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}