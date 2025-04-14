import React from 'react';
import bitcoin from "../assets/images/bitcoin.png";
import ethereum from "../assets/images/eth.png";
import sui from "../assets/images/sui.png";
import green from "../assets/images/green.png";
import red from "../assets/images/red.png";

const MarketOverview = () => {
    const data = [
        {
            id: 1,
            icon: bitcoin,
            name: "Bitcoin BTC",
            price: "$81,902.83",
            change: "11.13%",
            volume: "$11,438,332",
            marketCap: "$1,628,453,709,684",
            changeType: "up"
        },
        {
            id: 2,
            icon: ethereum,
            name: "Ethereum ETH",
            price: "$1,872.82",
            change: "1.18%",
            volume: "$24,111,736,912",
            marketCap: "$226,443,051,879",
            changeType: "down"
        },
        {
            id: 3,
            icon: sui,
            name: "SUI",
            price: "$2.25",
            change: "1.44%",
            volume: "$848,505,823.17",
            marketCap: "$893,483,382.27",
            changeType: "down"
        },
        {
            id: 4,
            icon: ethereum,
            name: "Ethereum ETH",
            price: "$2.25",
            change: "1.44%",
            volume: "$848,505,823.17",
            marketCap: "$893,483,382.27",
            changeType: "down"
        }
    ];

    const repeatedData = [...data, ...data, ...data, ...data];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#4D7FB0] via-[#4D7FB0] to-[#04203A] via-[2%] p-8">
            <h1 className="text-white text-4xl font-extrabold mb-4 text-center tracking-wide leading-tight drop-shadow-lg">
                <span className="font-sans">Market</span>{' '}
                <span className="font-stylescript">Overview</span>
            </h1>
            <div className="overflow-x-auto">
                <table className="w-full bg-[#D9E2EB] rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-[#4473A1] text-white">
                            <th className="p-4">#</th>
                            <th className="p-4">Cryptocurrency</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">24h</th>
                            <th className="p-4">Volume (24h)</th>
                            <th className="p-4">Market Cap</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-y-auto h-64 scroll-smooth animate-scroll">
                        {repeatedData.map((item, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="p-4 text-center">{item.id}</td>
                                <td className="p-4 flex items-center">
                                    <img src={item.icon} alt={item.name} className="w-6 h-6 mr-2" />
                                    {item.name}
                                </td>
                                <td className="p-4 text-center">{item.price}</td>
                                <td className="p-4 text-center">
                                    <img src={item.changeType === "up" ? green : red} alt="change" className="w-4 h-4 inline-block mr-1" />
                                    <span className={item.changeType === "up" ? "text-green-500" : "text-red-500"}>
                                        {item.change}
                                    </span>
                                </td>
                                <td className="p-4 text-center">{item.volume}</td>
                                <td className="p-4 text-center">{item.marketCap}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MarketOverview;