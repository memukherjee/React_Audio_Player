import AudioPlayer from "./AudioPlayer";
import Songs from "./Songs";

export default function Footer({
  audioRef,
  playing,
  onPlayPause,
  currentTime,
  duration,
  volume,
  changeTrack,
  setTitle,
}) {
  return (
    <div className="absolute left-0 bottom-0 lg:bottom-0 w-full h-40 lg:h-[300px] z-20 bg-gradient-to-t from-black to-transparent px-2">
      <div className="max-w-3xl h-max mx-auto rounded-lg overflow-hidden backdrop-blur-sm">
        <AudioPlayer
          audioRef={audioRef}
          playing={playing}
          onPlayPause={onPlayPause}
          currentTime={currentTime}
          duration={duration}
          volume={volume}
        />
        <Songs
          audioRef={audioRef}
          setTitle={setTitle}
          changeTrack={changeTrack}
          playing={playing}
        />
      </div>
    </div>
  );
}
