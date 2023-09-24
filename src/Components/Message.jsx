import React from "react";
import Chat from "./Chat";

function Message() {
  return (
    <section className="h-screen w-[450px] bg-white pt-10 overflow-scroll shadow-[0px 4px 4px 0px] shadow-[rgba(0, 0, 0, 0.25)] pr-5">
      <div className="container">
        <input
          type="text"
          className="placeholder:capitalize placeholder:text-black focus:outline-none bg-[#F1F1F1] px-4 py-3 w-full"
          placeholder="search"
        />

        <div className={`py-10 flex flex-col gap-4 scroll`}>
          <Chat
            name="CaesarCalls"
            text="This is 🔥 "
            img="/callers/caesar.png"
          />
          <Chat
            name="Gambles 🎲 MadApes"
            text="Im Fucking Hype "
            num={1}
            img="/callers/madapes.png"
          />
          <Chat
            name="Pow’s Gem Calls"
            text="Yo where are u? "
            num={6}
            img="/callers/pow.png"
          />
          <Chat name="Aeon’s Gems" text="Any Plan? " img="/callers/aeon.png" />
          <Chat
            name=" Kingdom of x100 CALLS"
            text="Calling now"
            img="/callers/kingdom.png"
          />
          <Chat
            name=" KOBE’S CALLS"
            text="This is SENDING"
            num={2}
            img="/callers/kobe.png"
          />
          <Chat
            name="Maythous Calls"
            text="I’ll tell Caesar this is insidoor"
            img="/callers/maythous.png"
          />
          <Chat
            name="Luffy’s gem calls"
            text="Updating call now "
            num={3}
            img="/callers/luffy.png"
          />
          <Chat
            name=" Catfish Calls by Poe"
            text="Any Plan?Big dick energy "
            img="/callers/poe.png"
          />
          <Chat
            name="goobygambles"
            text="Any Plan? "
            num={1}
            img="/callers/gooby.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Message;
