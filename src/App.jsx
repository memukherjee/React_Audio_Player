import { useState } from "react";
import Footer from "./components/Footer";
import GradiantBG from "./components/GradiantBG";
import Header from "./components/Header";
import Portrait from "./components/Portrait";
import useAudio from "./hooks/useAudio";
import Logo from "./components/Logo";

function App() {
  const [title, setTitle] = useState("Pritam & Suman");
  const {
    audioRef,
    playing,
    onPlayPause,
    currentTime,
    duration,
    volume,
    changeTrack,
  } = useAudio();
  return (
    <>
      <Logo 
        playing={playing}
      />
      <GradiantBG />
      <Header />
      <Portrait title={title} />

      <Footer
        audioRef={audioRef}
        playing={playing}
        onPlayPause={onPlayPause}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        changeTrack={changeTrack}
        setTitle={setTitle}
      />
    </>
  );
}

export default App;
