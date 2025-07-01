'use client';

import { Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer({ audioSrc, title }) {
  // Refs
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  
  // Effect to set up audio element
  useEffect(() => {
    const audio = audioRef.current;
    
    const updateData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };
    
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };
    
    // Event listeners
    audio.addEventListener('loadedmetadata', updateData);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', () => setIsPlaying(false));
    
    // Set initial volume and playback rate
    audio.volume = volume;
    audio.playbackRate = playbackRate;
    
    // Cleanup
    return () => {
      audio.removeEventListener('loadedmetadata', updateData);
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [volume, playbackRate]);

  // Handle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle progress bar click
  const handleProgressBarClick = (e) => {
    if (!progressBarRef.current) return;
    
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / progressBar.clientWidth;
    const newTime = clickPosition * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Format time (seconds to MM:SS)
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Skip forward/backward
  const skipForward = () => {
    audioRef.current.currentTime += 5;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 5;
  };

  // Toggle volume slider
  const toggleVolumeSlider = () => {
    setShowVolumeSlider(!showVolumeSlider);
  };

  return (
    <div className="audio-player rounded-lg md:w-3xl pt-12 pb-6">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      {/* Top Row */}
      <div className="top-row flex flex-col mb-4">
        {/* Title */}
        {title && <div className="font-medium truncate mx-auto">{title}</div>}
        
        <div className="flex items-center justify-between w-full">
          {/* Play/Pause Button */}
          <button 
            onClick={togglePlayPause}
            className="play-pause flex items-center bg-[#FF5924] text-white p-3 rounded-full"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause fill='white' strokeWidth={0.5} className='size-4' />
            ) : (
              <img src='/play.svg' className='size-4 ml-0.5' />
            )}
          </button>
          
          {/* Progress Bar with Timestamps */}
          <div className="flex-grow mx-4 flex items-center">
            <span className="text-xs text-gray-600 w-10 text-right mr-2">
              {formatTime(currentTime)}
            </span>
            <div 
              ref={progressBarRef}
              className="progress-bar bg-gray-200 h-1.5 rounded-full flex-grow cursor-pointer relative"
              onClick={handleProgressBarClick}
            >
              <div 
                className="progress bg-[#FF5924] h-full rounded-full absolute top-0 left-0"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 w-10 text-left ml-2">
              {formatTime(duration)}
            </span>
          </div>
          
          {/* Volume Control */}
          <div className="relative flex-shrink-0">
            <button 
              onClick={toggleVolumeSlider}
              className="volume-icon p-1 rounded-full"
              aria-label="Volume control"
            >
              <img src='/sound.svg' className='size-5' />
            </button>
            
            {showVolumeSlider && (
              <div className="absolute bottom-[4rem] left-1/2 transform -translate-x-1/2 p-2 -ml-1 -rotate-90">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-24 h-1.5 bg-[#FF5924] rounded-full appearance-none"
                  style={{
                    background: `linear-gradient(to right, #FF5924 0%, #FF5924 ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom Row */}
      <div className="bottom-row flex items-center justify-center -translate-y-3 space-x-8">
        {/* Skip Backward */}
        <button 
          onClick={skipBackward}
          className="skip-backward p-2 rounded-full hover:bg-gray-200"
          aria-label="Skip backward 5 seconds"
        >
          <img src='/backward.svg' className='size-4 ml-0.5' />
        </button>
        
        {/* Playback Speed */}
        <div className="speed-control">
          <select
            value={playbackRate}
            onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
            className="text-sm p-1 border border-gray-300 rounded bg-white"
          >
            <option value="0.5">0.5x</option>
            <option value="0.75">0.75x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>
        
        {/* Skip Forward */}
        <button 
          onClick={skipForward}
          className="skip-forward p-2 rounded-full hover:bg-gray-200"
          aria-label="Skip forward 5 seconds"
        >
          <img src='/forward.svg' className='size-4 ml-0.5' />
        </button>
      </div>
    </div>
  );
}