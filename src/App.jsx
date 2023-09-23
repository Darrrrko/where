import React from "react";
import Header from "./Components/Header";
import Message from "./Components/Message";
import ChatBox from "./Components/ChatBox";
import Overlay from "./Components/Calls/Overlay";

function App() {
  return (
    <>
      <main clas sName="overflow-hidden w-full min-h-screen relative font-spaceGrotesk">
        <Overlay />
        <div className="h-screen w-full relative flex justify-betwee">
          <Header />
          <Message />
          <ChatBox />
        </div>
      </main>
    </>
  );
}

export default App;
