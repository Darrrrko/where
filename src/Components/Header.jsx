import { useState } from 'react';
import HomeIcon from "../assets/icons/Home.svg";
import TelegramIcon from "../assets/icons/Telegram.svg";
import TwitterIcon from "../assets/icons/Twitter.svg";
import Logo from "../assets/images/logo.png";
import MenuIcon from "../assets/icons/menu.svg";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-[50px] h-screen bg-[#419FD9] p-3 lg:w-[70px] lg:py-10">
            <div className="flex items-center justify-center lg:hidden">
                <img src={MenuIcon} alt="Menu" onClick={() => setIsOpen(!isOpen)} className="w-6 h-6" />
            </div>
            <div className={${isOpen ? 'flex' : 'hidden'} lg:flex flex-col items-center lg:items-start lg:block gap-5 text-white}>
                <img src={Logo} alt="Logo" className="w-[100px] h-[100px] object-contain mx-auto mb-5 lg:mb-0" />
                <div className="flex flex-col items-center lg:items-start gap-6 mt-10">
                    <a href="/" className="flex justify-center lg:justify-start items-center flex-col">
                        <img src={HomeIcon} alt="Home" className="w-6 h-6" />
                        Home
                    </a>
                    <a href="https://t.me/WhereisdevETH" className="flex justify-center lg:justify-start items-center flex-col">
                        <img src={TelegramIcon} alt="Telegram" className="w-6 h-6" />
                        Telegram
                    </a>
                    <a href="https://twitter.com/WhereisdevETH" className="flex justify-center lg:justify-start items-center flex-col">
                        <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
                        Twitter
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;