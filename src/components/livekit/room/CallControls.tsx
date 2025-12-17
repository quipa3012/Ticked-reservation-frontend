export function CallControls({ session, onStart, onEnd }: any) {
    return (
        <button
            onClick={session.isConnected ? onEnd : onStart}
            disabled={session.connectionState === 'connecting'}
        >
            {session.isConnected ? '❌ Ngắt kết nối' : '📞 Gọi agent'}
        </button>
    );
}
