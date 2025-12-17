export type ConnectionDetails = {
    serverUrl: string;
    roomName: string;
    participantName: string;
    participantToken: string;
};

export async function fetchConnectionDetails(agentName?: string): Promise<ConnectionDetails> {
    const res = await fetch('/api/connection-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            room_config: {
                agents: agentName ? [{ agent_name: agentName }] : [],
            },
        }),
    });

    if (!res.ok) {
        throw new Error('Failed to fetch connection details');
    }

    return res.json();
}
