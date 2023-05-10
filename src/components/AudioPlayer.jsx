import { useRef } from "react";
import { formatTime } from "../utils/formatTime";

export default function AudioPlayer({
  audioRef,
  playing,
  onPlayPause,
  currentTime,
  duration,
  volume,
}) {
  const prevVolume = useRef(0.5);
  return (
    <div className="bg-black py-2 bg-opacity-80">
      <div>
        <audio ref={audioRef} preload="metadata">
          <source src={null} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div
        style={
          !audioRef.current?.src
            ? {
                pointerEvents: "none",
                opacity: 0.5,
                filter: "grayscale(1)",
              }
            : {}
        }
        className="controls flex items-center text-secondary w-11/12 max-w-lg mx-auto transition-all duration-300 ease-in-out"
      >
        <div className="play-pause-btn">
          <button
            onClick={onPlayPause}
            disabled={!audioRef.current?.src}
            className="bg-secondary text-primary outline-none w-8 aspect-square rounded-full flex items-center justify-center mr-4"
          >
            {playing ? (
              <i className="fas fa-pause"></i>
            ) : (
              <i className="fas fa-play"></i>
            )}
          </button>
        </div>
        <div className="track flex justify-between items-center grow gap-x-2">
          <span>{!isNaN(currentTime) ? formatTime(currentTime) : "00:00"}</span>
          <input
            className="progress w-full grow accent-secondary"
            type="range"
            name="duration"
            id="duration"
            min="0"
            max={isNaN(duration) ? 0 : duration}
            value={isNaN(currentTime) ? 0 : currentTime}
            onChange={(e) => {
              audioRef.current.currentTime = e.target.value;
            }}
          />
          <span>{!isNaN(duration) ? formatTime(duration) : "00:00"}</span>
        </div>
        <div className="volume group flex items-center justify-start gap-x-2">
          <button
            onClick={() => {
              audioRef.current.volume = volume === 0 ? prevVolume.current : 0;
              prevVolume.current = volume;
            }}
            disabled={!audioRef.current?.src}
            className="bg-secondary text-primary outline-none w-8 aspect-square rounded-full flex items-center justify-center ml-4"
          >
            {audioRef.current?.volume === 0 ? (
              <i className="fas fa-volume-mute"></i>
            ) : audioRef.current?.volume > 0.5 ? (
              <i className="fas fa-volume-up"></i>
            ) : (
              <i className="fas fa-volume-down"></i>
            )}
          </button>
          <input
            className="progress w-16 md:w-0 md:opacity-0 accent-secondary md:group-hover:w-24 md:group-hover:opacity-100 transition-all duration-300"
            type="range"
            name="volume"
            id="volume"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => {
              audioRef.current.volume = e.target.value;
            }}
          />
        </div>
      </div>
    </div>
  );
}
