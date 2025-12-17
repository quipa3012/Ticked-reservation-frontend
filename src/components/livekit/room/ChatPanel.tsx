import { Input, Button, Typography } from 'antd';
import { useRef } from 'react';

const { Text } = Typography;

export interface Message {
    id: string;
    message: string;
}

export interface ChatPanelProps {
    messages: Message[];
    input: string;
    onInputChange: (value: string) => void;
    onSend: (value: string) => void;
    sending: boolean;
    height?: number;
}

export function ChatPanel({
    messages,
    input,
    onInputChange,
    onSend,
    sending,
    height = 400,
}: ChatPanelProps) {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const handleSend = () => {
        if (!input.trim()) return;
        onSend(input);
        onInputChange('');
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height,
                border: '1px solid #f0f0f0',
                borderRadius: 4,
                padding: 8,
                background: '#fff',
            }}
        >
            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', marginBottom: 8 }}>
                {messages.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: 4,
                        }}
                    >
                        <div
                            style={{
                                background: '#f5f5f5',
                                padding: '6px 12px',
                                borderRadius: 16,
                                maxWidth: '75%',
                                wordBreak: 'break-word',
                            }}
                        >
                            <Text>{item.message}</Text>
                        </div>
                    </div>
                ))}

                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={{ display: 'flex', gap: 8 }}>
                <Input
                    value={input}
                    onChange={(e) => onInputChange(e.target.value)}
                    onPressEnter={handleSend}
                    placeholder="Nhập tin nhắn..."
                />
                <Button type="primary" onClick={handleSend} disabled={sending || !input.trim()}>
                    Gửi
                </Button>
            </div>
        </div>
    );
}
