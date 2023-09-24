import React, { useState } from "react";

function Loader() {
  const [hide, setHide] = useState(false);
  return (
    <section
      className={`min-h-screen ${
        hide ? "hidden" : "flex"
      } w-full bg-white  fixed top-0 left-0 z-50 justify-center items-center`}
    >
      <button
        onClick={() => {
          setHide(true);
        }}
        className=" text-4xl uppercase bg-blue-200 text-white px-5 py-2 rounded-md"
      >
        Join meeting
      </button>
    </section>
  );
}

export default Loader;
