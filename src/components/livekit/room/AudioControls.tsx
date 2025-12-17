import { StartAudio, RoomAudioRenderer, StartMediaButton } from '@livekit/components-react';

export function AudioControls() {
    return (
        <>
            <StartAudio label="Bắt đầu nói" />
            <StartMediaButton label="Click to allow media playback" />
            <RoomAudioRenderer />
        </>
    );
}
