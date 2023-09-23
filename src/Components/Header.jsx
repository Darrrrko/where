import Home from "../assets/icons/Home.svg";
import Telegram from "../assets/icons/Telegram.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="w-[70px] hidden lg:block  h-screen bg-[#419FD9] py-10">
      <div className="container flex flex-col gap-5 text-white">
        <img src={Logo} />
        <div className="flex flex-col items-center justify-center gap-6 mt-10">
          <a href="" className="flex justify-center items-center flex-col">
            <img src={Home} />
            Home
          </a>
          <a href="" className="flex justify-center items-center flex-col">
            <img src={Telegram} />
            Telegram
          </a>{" "}
          <a href="" className="flex justify-center items-center flex-col">
            <img src={Twitter} />
            Twitter
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
