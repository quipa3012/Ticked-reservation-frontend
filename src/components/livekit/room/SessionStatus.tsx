export function SessionStatus({ sessionState, agentState }: any) {
    return (
        <div style={{ marginTop: 8 }}>
            <div><b>Session:</b> {sessionState}</div>
            <div><b>Agent:</b> {agentState}</div>
        </div>
    );
}
