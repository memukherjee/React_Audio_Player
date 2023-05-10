import { songs } from "../assets/songs/songs";

export default function Songs({ audioRef, setTitle, changeTrack, playing }) {
  return (
    <div className="songs h-32 lg:h-56 p-4 bg-white bg-opacity-50 rou flex flex-wrap flex-col justify-center gap-x-8 overflow-x-auto mini-scroll">
      {songs.map((song) => (
        <div
          className="song cursor-pointer rounded-lg overflow-hidden w-32 md:w-48 aspect-square relative shri"
          key={song.id}
          onClick={() => {
            setTitle(song.name);
            changeTrack(song.src);
          }}
          title={song.name}
        >
          <img
            className="w-full h-full object-cover"
            src={song.image}
            alt={song.name}
          />
          <div className="controls absolute inset-0">
            <div
              id={"btn-" + song.id}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer"
            >
              {playing && audioRef.current.src.includes(song?.src) ? (
                <i className="fa-solid fa-pause pointer-events-none"></i>
              ) : (
                <i className="fa-solid fa-play pointer-events-none"></i>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
