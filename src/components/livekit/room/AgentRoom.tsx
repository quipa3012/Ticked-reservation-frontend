'use client';

import { useState, useEffect } from 'react';
import {
    SessionProvider,
    StartAudio,
    RoomAudioRenderer,
} from '@livekit/components-react';
import { Row, Col, Spin, Card, Layout, Typography } from 'antd';

import { useAgentSession } from '@/components/livekit/hooks/useAgentSession';
import { CallControls } from './CallControls';
import { SessionStatus } from './SessionStatus';
import { ChatPanel } from './ChatPanel';
import { AudioControls } from './AudioControls';
import { fetchConnectionDetails } from '@/services/livekit/livekit';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

export default function AgentRoomWrapper() {
    const [conn, setConn] = useState<{ serverUrl: string; participantToken: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            try {
                const data = await fetchConnectionDetails('customer-support');
                setConn({ serverUrl: data.serverUrl, participantToken: data.participantToken });
            } finally {
                setLoading(false);
            }
        };
        init();
    }, []);

    if (!conn || loading) {
        return (
            <div style={{ textAlign: 'center', marginTop: 100 }}>
                <Spin size="large"> Đang kết nối  </Spin>
            </div>
        );
    }

    return <AgentRoom serverUrl={conn.serverUrl} token={conn.participantToken} agentName="customer-support" />;
}

type Props = {
    serverUrl: string;
    token: string;
    agentName: string;
};

function AgentRoom(props: Props) {
    const { session, agent, messagesApi, start, end } = useAgentSession(props);
    const [input, setInput] = useState('');

    useEffect(() => {
        return () => end();
    }, [end]);

    useEffect(() => {
        console.log('Messages array:', messagesApi.messages);
    }, [messagesApi.messages]);


    return (
        <SessionProvider session={session}>
            <Layout style={{ height: '100vh' }}>
                <Header style={{ backgroundColor: '#001529', color: '#fff', padding: '0 24px' }}>
                    <Title level={4} style={{ color: '#fff', lineHeight: '64px', margin: 0 }}>
                        Customer Support Room
                    </Title>
                </Header>

                <Layout>
                    {/* Chat chiếm chính giữa */}
                    <Content style={{ padding: '24px', backgroundColor: '#f0f2f5', flex: 2 }}>
                        <Card title="Chat" style={{ height: '100%' }}>
                            {session.isConnected && (
                                <ChatPanel
                                    messages={messagesApi.messages}
                                    input={input}
                                    onInputChange={setInput}
                                    onSend={(msg) => { messagesApi.send(msg); setInput(''); }}
                                    sending={messagesApi.isSending}
                                    height={window.innerHeight - 200}
                                />
                            )}
                        </Card>
                    </Content>

                    {/* Video + controls bên phải */}
                    <Sider width={300} style={{ padding: 24 }}>
                        <Card title="Agent Video & Controls" style={{ height: '100%' }}>
                            <CallControls session={session} onStart={start} onEnd={end} />
                            <SessionStatus sessionState={session.connectionState} agentState={agent.state} />
                            <AudioControls />
                            <StartAudio label="Bật âm thanh" />
                            <RoomAudioRenderer />
                        </Card>
                    </Sider>
                </Layout>
            </Layout>

        </SessionProvider>
    );
}
