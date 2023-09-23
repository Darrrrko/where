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
          <Chat name="Caesar Calls" text="This is 🔥 " />
          <Chat name="MadApe Calls" text="Im Fucking Hype " num={1} />
          <Chat name="Venom Calls" text="Yo where are u? " num={6} />
          <Chat name="The Iron Man calls" text="Any Plan? " />
          <Chat name="The Iron Man calls" text="Any Plan? " />
          <Chat name="The Iron Man calls" text="Any Plan? " num={2} />
          <Chat name="The Iron Man calls" text="Any Plan? " />
          <Chat name="The Iron Man calls" text="Any Plan? " num={3} />
          <Chat name="The Iron Man calls" text="Any Plan? " />
          <Chat name="The Iron Man calls" text="Any Plan? " num={1} />
          <Chat name="The Iron Man calls" text="Any Plan? " />
          <Chat name="The Iron Man calls" text="Any Plan? " num={10} />
          <Chat name="The Iron Man calls" text="Any Plan? " />
          <Chat />
        </div>
      </div>
    </section>
  );
}

export default Message;
