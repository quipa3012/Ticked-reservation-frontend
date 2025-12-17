import { StartAudio, RoomAudioRenderer } from '@livekit/components-react';

export function AudioControls() {
    return (
        <>
            <StartAudio label="🎤 Bắt đầu nói" />
            <RoomAudioRenderer />
        </>
    );
}
