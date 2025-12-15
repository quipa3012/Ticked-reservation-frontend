'use client';

import { Menu, Button, Dropdown, Space, Typography } from 'antd';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/stores/auth/AuthContext';
import styles from './header.module.scss';

const menuItems = [
    { label: <Link href="/">Home</Link>, key: 'home' },
    { label: <Link href="/movies">Danh sách phim</Link>, key: 'hello' },
];

export default function HeaderClient() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const userMenuItems: MenuProps['items'] = [
        {
            key: 'profile',
            label: <Link href="/profile">Thông tin cá nhân</Link>,
        },
        {
            type: 'divider',
        },
        {
            key: 'logout',
            label: 'Đăng xuất',
            danger: true,
            onClick: () => {
                logout();
                router.push('/login');
            },
        },
    ];


    return (
        <div className={styles.centerMenu}>
            <Menu
                mode="horizontal"
                items={menuItems}
                className={styles.menu}
                selectable={false}
            />

            <div className={styles.auth}>
                {!user ? (
                    <Link href="/login">
                        <Button type="primary">Đăng Nhập</Button>
                    </Link>
                ) : (
                    <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
                        <Space className={styles.user}>
                            <Typography.Text strong>
                                {user.fullName}
                            </Typography.Text>
                        </Space>
                    </Dropdown>
                )}
            </div>
        </div>
    );
}
