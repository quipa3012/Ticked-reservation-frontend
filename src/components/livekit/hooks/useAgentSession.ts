'use client';

import { TokenSource } from 'livekit-client';
import {
    useSession,
    useAgent,
    useSessionMessages,
} from '@livekit/components-react';
import { useCallback } from 'react';

type Params = {
    serverUrl: string;
    token: string;
    agentName: string;
};

export function useAgentSession({
    serverUrl,
    token,
    agentName,
}: Params) {
    const tokenSource = TokenSource.literal({
        serverUrl,
        participantToken: token,
    });

    const session = useSession(tokenSource, { agentName });
    const agent = useAgent(session);
    const messagesApi = useSessionMessages(session);

    const start = useCallback(() => {
        if (session.connectionState === 'disconnected') {
            session.start();
        }
    }, [session]);

    const end = useCallback(() => {
        if (session.isConnected) {
            session.end();
        }
    }, [session]);

    return {
        session,
        agent,
        messagesApi,
        start,
        end,
    };
}
