import { useEffect, useRef, useState } from "react";

export default function useAudio() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00.00");
  const [duration, setDuration] = useState("00.00");
  const [volume, setVolume] = useState(0.75);
  const audioRef = useRef();

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener("ended", () => setPlaying(false));
    audioElement.addEventListener("timeupdate", () => {
      setCurrentTime(
        audioElement?.currentTime && isNaN(audioElement?.currentTime)
          ? "00.00"
          : audioElement?.currentTime
      );
      setDuration(
        audioElement?.duration && isNaN(audioElement?.duration)
          ? "00.00"
          : audioElement?.duration
      );
    });
    audioElement.addEventListener("volumechange", () => {
      setVolume(audioElement?.volume);
    });

    return () => {
      audioElement.removeEventListener("ended", () => setPlaying(false));
      audioElement.removeEventListener("timeupdate", () => {
        setCurrentTime(
          audioElement?.currentTime && isNaN(audioElement?.currentTime)
            ? "00.00"
            : audioElement?.currentTime
        );
        setDuration(
          audioElement?.duration && isNaN(audioElement?.duration)
            ? "00.00"
            : audioElement?.duration
        );
      });
      audioElement.removeEventListener("volumechange", () => {
        setVolume(audioElement?.volume);
      });
    };
  }, []);

  const onPlayPause = (callback) => {
    const prevValue = playing;
    setPlaying((prev) => !prev);
    if (!prevValue) audioRef.current.play();
    else audioRef.current.pause();
    if (callback && typeof callback === "function") callback();
  };

  const changeTrack = (src) => {
    if (audioRef.current.src.includes(src)) {
      onPlayPause();
      return;
    }
    audioRef.current.pause();
    audioRef.current.src = src;
    audioRef.current.load();
    audioRef.current.play();
    setPlaying(true);
  };

  return {
    audioRef,
    playing,
    onPlayPause,
    currentTime,
    duration,
    volume,
    changeTrack,
  };
}
