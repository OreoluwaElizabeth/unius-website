import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/unius logo png white 1.png"
import design from "../assets/images/piese of block.png";
import twitter from "../assets/images/new tweet.png";
import telegram from "../assets/images/telegram.png";
import discord from "../assets/images/new discord.png";
import instagram from "../assets/images/insta.png";
import more from "../assets/images/menu.png";
import cancel from "../assets/images/cancel.png";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="bg-[#04203A] text-white relative px-2 py-2 z-50">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Unius Logo" className="h-12"/>
                    <div className="text-2xl md:text-3xl font-Montserrat ml-[-12px]">
                        UNIUS
                    </div>
                </div>
                <button onClick={toggleSidebar} className="text-3xl">
                    ☰
                </button>
            </div>

            <div className={`fixed top-0 right-0 h-screen w-64 bg-white transform transition-transform duration-300 ease-in-out ${
                isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
            >
                <div className="p-4 text-right">
                    <button onClick={toggleSidebar} className="text-2xl mb-4 w-8 h-8 flex items-center justify-center ml-auto">
                        <img
                            src={cancel}
                            alt="cancel button"
                        />
                    </button>
                    <Link href="/" className="block py-2 text-black hover:text-[#9AC1F8]">
                        Home
                    </Link>
                    <Link href="#" className="block py-2 text-black hover:text-[#9AC1F8]">
                        About
                    </Link>
                    <Link href="#" className="block py-2 text-black hover:text-[#9AC1F8]">
                        Features
                    </Link>
                    <Link href="#" className="block py-2 text-black hover:text-[#9AC1F8]">
                        How it work
                    </Link>
                    <Link to="/uwa" className="block py-2 text-black hover:text-[#9AC1F8]">
                        Universal Wallet Address
                    </Link>
                </div>
                <img
                    src={design}
                    alt="sidebar design"
                    className="absolute bottom-0 right-0 w-full"
                />
                <div className="absolute top-[876px] left-[977px] w-[222px] h-[30px] flex space-x-2 p-2">
                    <img src={twitter} alt="t" className="h-6"/>
                    <img src={telegram} alt="te" className="h-6"/>
                    <img src={discord} alt="d" className="h-6"/>
                    <img src={instagram} alt="in" className="h-6"/>
                    <img src={more} alt="dot" className="h-6"/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;