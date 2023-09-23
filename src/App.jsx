import React, { useEffect, useRef } from "react";
import Header from "./Components/Header";
import Message from "./Components/Message";
import ChatBox from "./Components/ChatBox";
import Overlay from "./Components/Calls/Overlay";

const audioFiles = [
  "/1.m4a",
  "/2.m4a",
  "/3.m4a",
  "/4.m4a",
  "/5.m4a",
  "/6.m4a",
  "/7.m4a",
  "/8.m4a",
  "/9.m4a",
  "/10.m4a",
];

function App() {
  const audioRef = useRef(null);
  const currentAudioIndexRef = useRef(0);

  useEffect(() => {
    const playNextAudio = () => {
      if (currentAudioIndexRef.current < audioFiles.length) {
        const audio = new Audio(audioFiles[currentAudioIndexRef.current]);
        audioRef.current = audio;
        audio.onended = handleAudioEnded;
        audio.play();
      }
    };

    const handleAudioEnded = () => {
      currentAudioIndexRef.current++;
      if (currentAudioIndexRef.current < audioFiles.length) {
        playNextAudio();
      }
    };

    const handleClick = () => {
      currentAudioIndexRef.current = 0; // Reset the index
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      playNextAudio();
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);
  
  return (
    <>
      <main
        clas
        sName="overflow-hidden w-full min-h-screen relative font-spaceGrotesk"
      >
        <Overlay />
        <div className="min-h-screen overflow-x-hidden lg:h-screen w-full relative flex flex-col lg:flex-row justify-betwee">
          <Header />
          <Message />
          <ChatBox />
        </div>
      </main>
    </>
  );
}

export default App;
