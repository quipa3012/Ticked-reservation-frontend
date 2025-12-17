import { Button, Space, Tooltip } from 'antd';
import { PhoneOutlined, StopOutlined } from '@ant-design/icons';

interface CallControlsProps {
    session: any;
    onStart: () => void;
    onEnd: () => void;
}

export function CallControls({ session, onStart, onEnd }: CallControlsProps) {
    const isConnecting = session.connectionState === 'connecting';
    const isConnected = session.isConnected;

    return (
        <Space>
            <Tooltip title={isConnected ? 'Ngắt kết nối' : 'Gọi Trợ Lý Ảo'}>
                <Button
                    type={isConnected ? 'default' : 'primary'}
                    danger={isConnected}
                    icon={isConnected ? <StopOutlined /> : <PhoneOutlined />}
                    onClick={isConnected ? onEnd : onStart}
                    loading={isConnecting}
                    disabled={isConnecting}
                >
                    {isConnected ? 'Ngắt kết nối' : 'Gọi Trợ Lý Ảo'}
                </Button>
            </Tooltip>
        </Space>
    );
}
