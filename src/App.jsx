import React, { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import Message from "./Components/Message";
import ChatBox from "./Components/ChatBox";
import Overlay from "./Components/Calls/Overlay";
import Loader from "./Components/Loader";

function App() {
  const [audioInstance, setAudioInstance] = useState(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      if (!hasPlayed) {
        let aud1 = new Audio("/call.m4a");
        aud1.loop = true;
        setAudioInstance(aud1);
        if (!pause) {
          aud1.play();
        }
        setHasPlayed(true);
      } else {
        if (pause) {
          audioInstance.pause();
        } else {
          audioInstance.play();
        }
      }
      setPause(!pause);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [audioInstance, hasPlayed, pause]);

  function pauseIt() {
    setPause(true);
  }

  return (
    <>
      <main className="overflow-hidden w-full min-h-screen relative font-spaceGrotesk">
        <Overlay pause={pauseIt} />
        <div className="min-h-screen overflow-x-hidden lg:h-screen w-full relative flex flex-col lg:flex-row justify-between">
          <Header />
          <Message />
          <ChatBox />
        </div>
        <Loader />
      </main>
    </>
  );
}

export default App;
