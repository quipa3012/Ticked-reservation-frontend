import { NextResponse } from 'next/server';
import { AccessToken, type AccessTokenOptions, type VideoGrant } from 'livekit-server-sdk';
import { RoomConfiguration } from '@livekit/protocol';

type ConnectionDetails = {
    serverUrl: string;
    roomName: string;
    participantName: string;
    participantToken: string;
};

const API_KEY = process.env.LIVEKIT_API_KEY;
const API_SECRET = process.env.LIVEKIT_API_SECRET;
const LIVEKIT_URL = process.env.LIVEKIT_URL;

export const revalidate = 0;

export async function POST(req: Request) {
    try {
        if (!LIVEKIT_URL || !API_KEY || !API_SECRET) {
            throw new Error('Missing LiveKit environment variables');
        }

        const body = await req.json();
        const { userId, userName, agentName } = body;

        if (!userId) {
            return new NextResponse('userId is required', { status: 400 });
        }

        const roomName = `support_room_${userId}`;
        const participantIdentity = `user_${userId}`;
        const participantName = userName ?? 'User';

        const participantToken = await createParticipantToken(
            { identity: participantIdentity, name: participantName },
            roomName,
            agentName
        );

        const data: ConnectionDetails = {
            serverUrl: LIVEKIT_URL,
            roomName,
            participantName,
            participantToken,
        };

        return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } });
    } catch (error) {
        console.error(error);
        return new NextResponse((error as Error).message, { status: 500 });
    }
}

function createParticipantToken(
    userInfo: AccessTokenOptions,
    roomName: string,
    agentName?: string,
    fullName?: string
): Promise<string> {
    const at = new AccessToken(API_KEY!, API_SECRET!, {
        ...userInfo,
        ttl: '15m',
    });

    const grant: VideoGrant = {
        room: roomName,
        roomJoin: true,
        canPublish: true,
        canPublishData: true,
        canSubscribe: true,
    };

    at.addGrant(grant);

    if (fullName) {
        at.metadata = JSON.stringify({ fullName });
    }

    if (agentName) {
        at.roomConfig = new RoomConfiguration({
            agents: [{ agentName }],
        });
    }

    return at.toJwt();
}
