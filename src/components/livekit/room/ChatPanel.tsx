export function ChatPanel({
    messages,
    input,
    onInputChange,
    onSend,
    sending,
}: any) {
    return (
        <>
            <div style={{ marginTop: 12, height: 220, overflowY: 'auto' }}>
                {messages.map((m: any) => (
                    <div key={m.id}>{m.message}</div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <input
                    value={input}
                    onChange={e => onInputChange(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && input.trim() && onSend(input)}
                />
                <button disabled={sending} onClick={() => onSend(input)}>
                    Gửi
                </button>
            </div>
        </>
    );
}
