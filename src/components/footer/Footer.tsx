import styles from './footer.module.scss';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>Green Space Solution</h2>
                    <span>© {new Date().getFullYear()} MyCompany. All rights reserved.</span>
                </div>

                <div className={styles.center}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                <div className={styles.right}>
                    <Link href="/privacy">Privacy</Link>
                    <Link href="/terms">Terms</Link>
                </div>
            </div>
        </footer>
    );
}
