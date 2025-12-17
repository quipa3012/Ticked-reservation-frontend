import { Badge, Row, Col } from 'antd';

const USER_STATE_LABEL: Record<string, { text: string; status: 'default' | 'processing' | 'success' | 'warning' | 'error' }> = {
    disconnected: { text: 'Đã ngắt kết nối', status: 'default' },
    connecting: { text: 'Đang kết nối', status: 'processing' },
    connected: { text: 'Đã kết nối', status: 'success' },
};

const AGENT_STATE_LABEL: Record<string, { text: string; status: 'default' | 'processing' | 'success' | 'warning' | 'error' }> = {
    disconnected: { text: 'Đã ngắt kết nối', status: 'default' },
    connecting: { text: 'Đang kết nối', status: 'processing' },
    'pre-connect-buffering': { text: 'Đang chuẩn bị', status: 'warning' },
    thinking: { text: 'Đang suy nghĩ', status: 'processing' },
    speaking: { text: 'Đang nói', status: 'success' },
    listening: { text: 'Đang nghe', status: 'processing' },
    failed: { text: 'Thất bại', status: 'error' },
};

export function SessionStatus({ sessionState, agentState }: any) {
    const user = USER_STATE_LABEL[sessionState] || { text: sessionState, status: 'default' };
    const agent = AGENT_STATE_LABEL[agentState] || { text: agentState, status: 'default' };

    return (
        <div style={{ marginTop: 8 }}>
            <Row gutter={[16, 8]}>
                <Col span={24}>
                    <b>Người dùng:</b>{' '}
                    <Badge status={user.status} text={user.text} />
                </Col>
                <Col span={24} style={{ marginTop: 8 }}>
                    <b>Agent:</b>{' '}
                    <Badge status={agent.status} text={agent.text} />
                </Col>
            </Row>
        </div>
    );
}
