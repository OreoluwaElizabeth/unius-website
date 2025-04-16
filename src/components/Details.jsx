import React from 'react';
import box from "../assets/images/box.png";
import connect from "../assets/images/connect 1.png";
import across from "../assets/images/accross chain.png";

const Details = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#20354A] to-[#4D7FB0] min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-y-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
                    <span className="font-calistoga text-5xl md:text-7xl lg:text-8xl">Everything</span> you
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
                    need in one Wallet.
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-6xl px-4">
                <div className="bg-gradient-to-b from-[#0B58A0] to-[#04203A] text-white p-6 rounded-2xl text-center w-full max-w-[300px]">
                    <img src={box} alt="transaction" className="w-35 h-20 mx-auto mb-4" />
                    <h3 className="font-bold mb-2 text-lg">Transaction Speed</h3>
                    <p className="text-sm">Optimized for speed, ensuring swift and seamless transactions across chains.</p>
                </div>
                <div className="bg-gradient-to-b from-[#8F7C4EAD] to-[#16436EBA] text-white p-6 rounded-2xl text-center w-full max-w-[300px]">
                    <img src={connect} alt="transaction" className="w-35 h-20 mx-auto mb-4" />
                    <h3 className="font-bold mb-2 text-lg">Store and Convert</h3>
                    <p className="text-sm">Effortlessly store and convert assets across chains with a single, stable token.</p>
                </div>
                <div className="bg-gradient-to-b from-[#0B58A0] to-[#04203A] text-white p-6 rounded-2xl text-center w-full max-w-[300px]">
                    <img src={across} alt="transaction" className="w-35 h-20 mx-auto mb-4" />
                    <h3 className="font-bold mb-2 text-lg">Send and Receive</h3>
                    <p className="text-sm">Seamlessly send and receive assets, across all chains.</p>
                </div>
            </div>
            <div className="mt-12">
                <button className="bg-[#4B8DCF] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#3a7bbf] transition-colors">
                    How it works
                </button>
            </div>
        </div>
    );
};
export default Details;