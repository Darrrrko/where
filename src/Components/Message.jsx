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
          <Chat name="CaesarCalls" text="This is 🔥 " />
          <Chat name="Gambles 🎲 MadApes" text="Im Fucking Hype " num={1} />
          <Chat
            name="Pow’s Gem Calls
"
            text="Yo where are u? "
            num={6}
          />
          <Chat
            name="Aeon’s Gems
"
            text="Any Plan? "
          />
          <Chat
            name=" Kingdom of x100 CALLS
"
            text="Any Plan? "
          />
          <Chat
            name=" KOBE’S CALLS
"
            text="Any Plan? "
            num={2}
          />
          <Chat
            name="Maythous Calls
"
            text="Any Plan? "
          />
          <Chat
            name="Luffy’s gem calls
"
            text="Any Plan? "
            num={3}
          />
          <Chat
            name=" Catfish Calls by Poe
"
            text="Any Plan? "
          />
          <Chat name="goobygambles" text="Any Plan? " num={1} />
        </div>
      </div>
    </section>
  );
}

export default Message;
