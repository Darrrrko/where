import React from "react";
import Header from "./Components/Header";
import Message from "./Components/Message";
import ChatBox from "./Components/ChatBox";
import Overlay from "./Components/Calls/Overlay";

function App() {
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
