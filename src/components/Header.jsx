import styles from './Header.module.css';

export default function Header() {
    return (
        <div>
            <header className={styles.header}>
                <nav>
                    <h1>logo</h1>

                    <ul>
                        <li>Favoritos</li>
                        <li>Carrinho</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}