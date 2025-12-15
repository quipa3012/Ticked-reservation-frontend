import styles from './header.module.scss';
import HeaderClient from '@/components/header/HeaderClient';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h2>Green Space Solution</h2>
            </div>

            <HeaderClient />
        </header>
    );
}
