import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../../assets/video.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);
    const closePlayer = (e) => {
        if (e.target === player.current) {
            console.log(player.current)
            setPlayState(false);
            const videoElement = player.current.querySelector('video');
            if (videoElement) {
                videoElement.pause();
                videoElement.currentTime = 0;
            }
        }
    }

    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player}
            onClick={closePlayer}>
            <video src={video} autoPlay muted controls ></video>
        </div>
    )
}

export default VideoPlayer;