"use client";

import { Menu, Button } from 'antd';
import Link from 'next/link';
import styles from './header.module.scss';

const items = [
    { label: <Link href="/">Home</Link>, key: 'home' },
    { label: <Link href="/hello">Hello</Link>, key: 'hello' },

];

export default function HeaderClient() {
    return (
        <div className={styles.centerMenu}>
            <Menu
                mode="horizontal"
                items={items}
                className={styles.menu}
            />
            <div className={styles.auth}>
                <Button type="primary">Login</Button>
            </div>
        </div>
    );
}
