import unius from "../assets/images/unius logo png white 1.png";
import tweet from "../assets/images/ri--twitter-x-line 1.png";
import tele from "../assets/images/telegram.png";
import discord from "../assets/images/ic--baseline-discord 1.png";
import instagram from "../assets/images/iconoir--instagram 1.png";
import more from "../assets/images/ix--more-menu 1.png";

const Footer = () => {
    return (
        <footer className='bg-[#04203A] text-white py-8 px-4 md:px-8 font-sans text-sm'>
            <div className='max-w-6xl mx-auto flex flex-wrap justify-between gap-6'>
                <div className='mb-6'>
                    <div className='flex items-center mb-4'>
                        <img src={unius} alt="Unius Logo" className='h-12 mr-[-12px]'/>
                        <h3 className='text-xl md:text-2xl font-bold font-mono'>UNIUS</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>Community</span>
                        <a href="#" className='text-white'>
                            <img src={tweet} alt="twi" className='h-6'/>
                        </a>
                        <a href="#" className='text-white'>
                            <img src={tele} alt="tele" className='h-6'/>
                        </a>
                        <a href="#" className='text-white'>
                            <img src={discord} alt="dis" className='h-6'/>
                        </a>
                        <a href="#" className='text-white'>
                            <img src={instagram} alt="insta" className='h-6'/>
                        </a>
                        <a href="#" className='text-white'>
                            <img src={more} alt="more" className='h-6'/>
                        </a>
                    </div>
                </div>

                <div className="mb-6">
                    <h4 className="font-bold mb-2">Company</h4>
                    <ul className="list-none p-0">
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">Home</a>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">About</a>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">Features</a>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">How it works</a>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">Legal</a>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">Terms</a>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">Work with us</a>
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h4 className="font-bold mb-2">Products</h4>
                    <ul className="list-none p-0">
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">Web app →</a>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">Android app →</a>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">ios app →</a>
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h4 className="font-bold mb-2">Support</h4>
                    <ul className="list-none p-0">
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">24/7 Support</a>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">Support Center</a>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="text-white hover:text-[#9AC1F8] no-underline">Product Feedback</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-6 border-t border-white/20 pt-4 text-xs">
                UNIUS © 2025. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;