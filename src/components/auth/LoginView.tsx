'use client';

import { Button, Card, Form, Input, Typography, message } from 'antd';
import { useAuth } from '@/stores/auth/AuthContext';
import styles from '@/components/auth/login.module.scss';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

interface LoginForm {
    username: string;
    password: string;
}

export default function LoginView() {
    const { login } = useAuth();
    const router = useRouter();

    const onFinish = (values: LoginForm) => {
        try {
            login(values);
            message.success('Login thành công');
            router.push('/');
        } catch (err: any) {
            message.error(err.message);
        }
    };

    return (
        <div className={styles.wrapper}>
            <Card className={styles.card}>
                <Title level={3} className={styles.title}>
                    Đăng nhập
                </Title>

                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Nhập username' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Nhập password' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block>
                        Login
                    </Button>
                </Form>
            </Card>
        </div>
    );
}
