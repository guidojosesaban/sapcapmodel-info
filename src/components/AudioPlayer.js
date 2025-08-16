import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaPlay, FaPause, FaForward, FaBackward, FaTimes } from 'react-icons/fa';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const PlayerCard = styled.div`
  background-color: ${props => props.theme.colors.contentBg};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.md};
  width: 90%;
  max-width: 400px;
  position: relative;
  transform: ${props => (props.isOpen ? 'scale(1)' : 'scale(0.9)')};
  transition: transform 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.textSecondary};
  &:hover {
    color: ${props => props.theme.colors.textPrimary};
  }
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${props => props.theme.colors.textPrimary};
  transition: color 0.2s ease;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const PlayPauseButton = styled(ControlButton)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
`;

const ProgressBar = styled.input`
  width: 100%;
  cursor: pointer;
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-top: 0.5rem;
`;

const AudioPlayer = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };
  
  const handleForward = () => {
    audioRef.current.currentTime = Math.min(duration, currentTime + 10);
  };
  
  const handleBackward = () => {
    audioRef.current.currentTime = Math.max(0, currentTime - 10);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    if (isOpen && audioRef.current && audioRef.current.paused && !isPlaying) {
        // Autoplay can be tricky, but we can try
        // audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log("Autoplay blocked"));
    } else if (!isOpen && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
    }
  }, [isOpen, isPlaying]);

  return (
    <ModalBackdrop isOpen={isOpen} onClick={onClose}>
      <PlayerCard isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}><FaTimes /></CloseButton>
        <Title>Audioresumen del Manual</Title>
        
        <audio
          ref={audioRef}
          src="/audio/audio-resumen.mp3"
          onTimeUpdate={handleTimeUpdate}
          onLoadedData={handleLoadedData}
          onEnded={() => setIsPlaying(false)}
        />

        <Controls>
          <ControlButton onClick={handleBackward}><FaBackward /></ControlButton>
          <PlayPauseButton onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </PlayPauseButton>
          <ControlButton onClick={handleForward}><FaForward /></ControlButton>
        </Controls>

        <ProgressBar
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
        />
        <TimeContainer>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </TimeContainer>

      </PlayerCard>
    </ModalBackdrop>
  );
};

export default AudioPlayer;