import React from "react";

function Live() {
  return (
    <section className="h-screen w-full lg:w-[70%] flex pt-5 overflow-scroll shadow-[0px 4px 4px 0px] shadow-[rgba(0, 0, 0, 0.25)] pr-5 flex-col items-center">
      <div className="flex-col justify-start items-center inline-flex">
        <h1 className="text-black text-xl font-bold font-['Space Grotesk'] leading-7 tracking-tight">
          Travelad Crypto Hub
        </h1>
        <h5 className="text-black text-xl font-normal font-['Space Grotesk'] leading-7 tracking-tight">
          6 Participant
        </h5>
      </div>

      <div
        className="w-full grid grid-cols-2 justify-between lg:grid-cols-3 jube
       items-center mt-10"
      >
        <article className="relative w-full">
          <img src="/persons/person4.svg" />
          <button className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white  px-4 py-2 rounded-lg">
            John Does
          </button>
        </article>
        <article className="relative w-full">
          <img src="/persons/person5.svg" />
          <button className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white  px-4 py-2 rounded-lg">
            John Does
          </button>
        </article>{" "}
        <article className="relative w-full">
          <img src="/persons/person6.svg" />
          <button className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white  px-4 py-2 rounded-lg">
            John Does
          </button>
        </article>{" "}
        <article className="relative w-full">
          <img src="/persons/person7.svg" />
          <button className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white  px-4 py-2 rounded-lg">
            John Does
          </button>
        </article>{" "}
        <article className="relative w-full">
          <img src="/persons/person8.svg" />
          <button className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white  px-4 py-2 rounded-lg">
            John Does
          </button>
        </article>{" "}
        <article className="relative w-full">
          <img src="/persons/person9.svg" />
          <button className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white  px-4 py-2 rounded-lg">
            John Does
          </button>
        </article>
      </div>
    </section>
  );
}

export default Live;
