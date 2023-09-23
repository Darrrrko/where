import React, { useEffect, useState } from "react";
import image from "../../assets/images/ima.svg";
import Header from "../Header";
import Message from "../Message";
import ChatBox from "../ChatBox";
import Live from "./Live";
import LastBar from "./LastBar";

function Overlay() {
  const [yes, setYes] = useState(false);
  useEffect(() => {
    // Event listener to set yes to true on window click
    const handleClick = () => {
      setYes(true);
    };
    window.addEventListener("click", handleClick);

    const interval = setInterval(() => {
      setYes((prevYes) => !prevYes);
    }, 10000);

    return () => {
      window.removeEventListener("click", handleClick);
      clearInterval(interval);
    };
  }, []);

  if (yes) {
    return (
      <section className="absolute z-10 w-full right-0 top-0 h-screen bg-[#fff]">
        <div className="h-screen w-full relative flex justify-betwee">
          <Header />
          <Live />
          <LastBar />
        </div>
      </section>
    );
  }

  if (!yes) {
    return (
      <section className="absolute z-10 w-full right-0 top-0 h-screen bg-[#0606066B]">
        <div className="container h-full flex justify-center items-center">
          <article className="h-96 w-96 rounded-3xl border-8 flex flex-col items-center border-sky-100 p-5 bg-white">
            <img
              src={image}
              className="w-24 h-24  border-4 border-sky-100 bg-neutral-900 rounded-full"
              alt=""
            />
            <h2 className="text-black text-3xl font-bold font-['Space Grotesk'] leading-10 tracking-wide">
              Travelad Crypto Hub
            </h2>
            <p className="text-black text-sm font-normal font-['Space Grotesk'] leading-tight tracking-tight">
              You have a video call
            </p>

            <div className="justify-start items-start gap-7 inline-flex mt-14">
              <div className="w-14 h-14 p-4 bg-yellow-500 rounded-full shadow justify-center items-center flex">
                <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.42497 2.57519C3.36919 2.5194 3.30296 2.47515 3.23007 2.44496C3.15718 2.41477 3.07906 2.39923 3.00017 2.39923C2.92128 2.39923 2.84316 2.41477 2.77027 2.44496C2.69738 2.47515 2.63116 2.5194 2.57537 2.57519C2.51959 2.63097 2.47533 2.6972 2.44514 2.77009C2.41495 2.84298 2.39941 2.9211 2.39941 2.99999C2.39941 3.07888 2.41495 3.157 2.44514 3.22989C2.47533 3.30278 2.51959 3.369 2.57537 3.42479L4.20137 5.04959C3.66602 5.28296 3.21042 5.66752 2.89046 6.15608C2.5705 6.64465 2.40011 7.21598 2.40017 7.79999V16.2C2.40017 16.9956 2.71624 17.7587 3.27885 18.3213C3.84146 18.8839 4.60452 19.2 5.40017 19.2H12.6002C13.3543 19.2 14.0807 18.916 14.6349 18.4045C15.189 17.8931 15.5302 17.1917 15.5906 16.44L20.5754 21.4248C20.688 21.5375 20.8408 21.6007 21.0002 21.6007C21.1595 21.6007 21.3123 21.5375 21.425 21.4248C21.5376 21.3121 21.6009 21.1593 21.6009 21C21.6009 20.8407 21.5376 20.6879 21.425 20.5752L3.42497 2.57519ZM20.117 17.3184L18.425 15.8796L16.8002 14.256V9.51599L20.1242 6.73919C20.2556 6.62974 20.4154 6.56 20.585 6.53812C20.7547 6.51624 20.927 6.54314 21.0819 6.61567C21.2367 6.6882 21.3677 6.80334 21.4595 6.94763C21.5513 7.09192 21.6001 7.25938 21.6002 7.43039V16.6308C21.6003 16.8027 21.5513 16.9711 21.4588 17.116C21.3663 17.2609 21.2342 17.3763 21.0782 17.4485C20.9221 17.5207 20.7487 17.5467 20.5784 17.5234C20.408 17.5002 20.2479 17.4286 20.117 17.3172V17.3184ZM15.6002 13.0548L7.34537 4.79879H12.6002C12.9942 4.79879 13.3844 4.87643 13.7485 5.02727C14.1126 5.1781 14.4433 5.39919 14.7219 5.67789C15.0005 5.9566 15.2215 6.28746 15.3722 6.65157C15.5228 7.01569 15.6003 7.40592 15.6002 7.79999V13.056V13.0548Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-14 h-14 p-4 bg-green-500 rounded-full shadow justify-center items-center flex">
                <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.3061 14.7611 16.1191 14.7523 15.9405 14.7948C15.7618 14.8372 15.5988 14.9291 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-14 h-14 p-4 bg-red-600 rounded-full shadow justify-center items-center flex">
                <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.3061 14.7611 16.1191 14.7523 15.9405 14.7948C15.7618 14.8372 15.5988 14.9291 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-14 h-14 p-4 bg-neutral-900 rounded-full shadow justify-center items-center flex">
                <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                  <div className="w-5 h-6 relative">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2959_3530)">
                        <path
                          d="M19.5 12C19.5 12.846 19.359 13.6605 19.101 14.4195L17.88 13.1985C17.9599 12.804 18.0001 12.4025 18 12V10.5C18 10.3011 18.079 10.1103 18.2197 9.96966C18.3603 9.82901 18.5511 9.74999 18.75 9.74999C18.9489 9.74999 19.1397 9.82901 19.2803 9.96966C19.421 10.1103 19.5 10.3011 19.5 10.5V12ZM12 18C13.227 18 14.367 17.6325 15.318 16.9995L16.395 18.078C15.3242 18.8545 14.0663 19.3323 12.75 19.4625V22.5H17.25C17.4489 22.5 17.6397 22.579 17.7803 22.7197C17.921 22.8603 18 23.0511 18 23.25C18 23.4489 17.921 23.6397 17.7803 23.7803C17.6397 23.921 17.4489 24 17.25 24H6.75C6.55109 24 6.36032 23.921 6.21967 23.7803C6.07902 23.6397 6 23.4489 6 23.25C6 23.0511 6.07902 22.8603 6.21967 22.7197C6.36032 22.579 6.55109 22.5 6.75 22.5H11.25V19.4625C9.40003 19.2766 7.68506 18.4101 6.43782 17.0312C5.19058 15.6523 4.49998 13.8593 4.5 12V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96966C4.86032 9.82901 5.05109 9.74999 5.25 9.74999C5.44891 9.74999 5.63968 9.82901 5.78033 9.96966C5.92098 10.1103 6 10.3011 6 10.5V12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3678 10.4087 18 12 18ZM16.5 4.49999V11.8185L7.737 3.05549C8.08041 2.04635 8.7708 1.19182 9.68525 0.644038C10.5997 0.0962516 11.6789 -0.109245 12.7307 0.0641303C13.7824 0.237506 14.7386 0.778503 15.4288 1.59081C16.1191 2.40312 16.4986 3.43402 16.5 4.49999Z"
                          fill="white"
                        />
                        <path
                          d="M14.2288 15.9105L7.49975 9.17999V12C7.49952 12.788 7.7062 13.5622 8.09911 14.2452C8.49203 14.9282 9.05741 15.4961 9.7387 15.892C10.42 16.288 11.1933 16.4981 11.9813 16.5013C12.7692 16.5045 13.5442 16.3008 14.2288 15.9105ZM2.46875 2.03099L20.4688 20.031L21.5308 18.969L3.53075 0.968994L2.46875 2.03099Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2959_3530">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default Overlay;
