import React from "react";
import Banner from "./Banner";
import search from "../assets/icons/search.svg";
import call from "../assets/icons/phone.svg";
import dot from "../assets/icons/Dot.svg";
import main from "../assets/icons/Main.svg";
import laugh from "../assets//icons/laugh.svg";
import record from "../assets//icons/record.svg";

function ChatBox() {
  return (
    <section className=" w-full hidden lg:flex bg-blue-100 h-screen bg-[url(/Bg.svg)] bg-repeat flex-col justify-between  relative py-0">
      <header className="w-full bg-white py-4 px-6 container  top-0 right-0">
        <div className=" flex justify-between items-center">
          <article className="flex flex-col gap-2">
            <h1 className="text-black text-base font-bold font-spaceGrotesk leading-snug tracking-tight">
              Travelad Crypto Hu
            </h1>
            <p className="text-black text-xs font-normal font-spaceGrotesk leading-none tracking-tight">
              @WenTrending
            </p>
          </article>
          <div className="justify-start items-start gap-3 inline-flex">
            <img src={search} />
            <img src={call} />
            <img src={dot} />
            <img src={main} />
          </div>
        </div>
      </header>
      <section className="h-[80vh] w-full overflow-scroll">
        <div className="container px-8 py-10 flex flex-col gap-16">
          <Banner
            name="Gambles 🎲 MadApes"
            text="    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi culpa
        rem provident tempora. Nulla libero molestias unde, ratione illum
        perspiciatis."
            link="facebook.com"
            img="/persons/person3.svg"
          />
          <Banner
            name="Vegito Calls"
            text="    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi culpa
        rem provident tempora. Nulla libero molestias unde, ratione illum
        perspiciatis."
            link="google.com"
            img="/persons/person2.svg"
          />
          <Banner
            name="Maythous Calls"
            text="    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi culpa
        rem provident tempora. Nulla libero molestias unde, ratione illum
        perspiciatis."
            link="dexcreneer.com"
            img="/persons/person3.svg"
          />
          <Banner
            name="Doxxed GEM Club 宝藏频道💎"
            text="    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi culpa
        rem provident tempora. Nulla libero molestias unde, ratione illum
        perspiciatis."
            link="dextool.com"
            img="/persons/person2.svg"
          />
        </div>
      </section>

      <footer className="py-5 w-full bg-white flex justify-center items-center ">
        <div className="container px-6 flex justify-between h-full items-center">
          <div className="flex justify-center items-center gap-5">
            <img src="/icons/file.svg" alt="" />
            <h2 className="text-black text-opacity-70 text-sm font-medium font-['Space Grotesk'] leading-tight tracking-tight">
              Write a message
            </h2>
          </div>
        </div>
        <div className="flex px-6  justify-center items-center gap-5">
          <img src={laugh} alt="" />
          <img src={record} alt="" />
        </div>
      </footer>
    </section>
  );
}

export default ChatBox;
