'use client';

import { useState, useEffect } from 'react';
import {
    SessionProvider,
    StartAudio,
    RoomAudioRenderer,
} from '@livekit/components-react';

import { useAgentSession } from '@/components/livekit/hooks/useAgentSession';
import { CallControls } from './CallControls';
import { SessionStatus } from './SessionStatus';
import { ChatPanel } from './ChatPanel';
import { AudioControls } from './AudioControls';
import { fetchConnectionDetails } from '@/services/livekit/livekit';

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
        return <div>Đang kết nối tới agent…</div>;
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
        return () => {
            end();
        };
    }, [end]);

    return (
        <SessionProvider session={session}>
            <div>
                <CallControls session={session} onStart={start} onEnd={end} />
                <SessionStatus sessionState={session.connectionState} agentState={agent.state} />
                {session.isConnected && (
                    <>
                        <ChatPanel messages={messagesApi.messages} input={input} onInputChange={setInput} onSend={messagesApi.send} sending={messagesApi.isSending} />
                        <AudioControls />
                    </>
                )}
            </div>
            <StartAudio label="Bật âm thanh" />
            <RoomAudioRenderer />
        </SessionProvider>
    );
}
