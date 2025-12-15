'use client';

import { Card, Descriptions, Typography, Button, Space } from 'antd';
import { useAuth } from '@/stores/auth/AuthContext';
import styles from '@/components/profile/profile.module.scss';

const { Title } = Typography;

export default function ProfileView() {
    const { user, logout } = useAuth();

    return (
        <div className={styles.wrapper}>
            <Card className={styles.card}>
                <Title level={3}>Thông tin cá nhân</Title>

                <Descriptions bordered column={1}>
                    <Descriptions.Item label="Họ tên">
                        {user.fullName}
                    </Descriptions.Item>

                    <Descriptions.Item label="Username">
                        {user.username}
                    </Descriptions.Item>

                    <Descriptions.Item label="Vai trò">
                        {user.role}
                    </Descriptions.Item>
                </Descriptions>

                <Space className={styles.actions}>
                    <Button onClick={() => alert('Các tính năng CRUD chỉ là demo, tập trung vào logic tư vấn và Đặt vé.')} >
                        Chỉnh sửa
                    </Button>
                    <Button danger onClick={logout}>
                        Logout
                    </Button>
                </Space>
            </Card>
        </div>
    );
}
