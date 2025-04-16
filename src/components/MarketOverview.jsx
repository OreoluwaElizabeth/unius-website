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
            volume: "$11m",
            marketCap: "$1t",
            changeType: "up"
        },
        {
            id: 2,
            icon: ethereum,
            name: "Ethereum ETH",
            price: "$1,872.82",
            change: "1.18%",
            volume: "$24b",
            marketCap: "$226b",
            changeType: "down"
        },
        {
            id: 3,
            icon: sui,
            name: "SUI",
            price: "$2.25",
            change: "1.44%",
            volume: "$848m",
            marketCap: "$893m",
            changeType: "down"
        },
        {
            id: 4,
            icon: ethereum,
            name: "Ethereum ETH",
            price: "$2.25",
            change: "1.44%",
            volume: "$848m",
            marketCap: "$893m",
            changeType: "down"
        }
    ];

    const repeatedData = [...data, ...data, ...data, ...data];

    return (
        <div className="min-h-screen bg-white p-8">
            <h1 className="text-[#04203A] text-4xl font-extrabold mb-4 text-center tracking-wide leading-tight">
                <span className="font-sans">Market</span>{' '}
                <span className="font-stylescript">Overview</span>
            </h1>
            <div className="overflow-x-auto bg-[#D9E2EB] max-w-[800px] mx-auto rounded-2xl pt-7 px-5">
                <div className="overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <th className='flex justify-between bg-[#4473A1] text-white rounded-2xl px-4 py-3'>
                                <tr>#</tr>
                                <tr>Cryptocurrency</tr>
                                <tr>Price</tr>
                                <tr>24h</tr>
                                <tr>Volume (24h)</tr>
                                <tr>Market Cap</tr>
                            </th>
                        </thead>
                        <tbody className="block w-full overflow-y-auto scrollbar-custom " style={{ maxHeight: '50vh' }}>
                            {repeatedData.map((item, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td style={{ width: '70px', minWidth: '60px' }} className="p-4 text-center">{item.id}</td>
                                    <td style={{ width: '170px', minWidth: '150px' }} className="p-4 flex items-center">
                                        <img src={item.icon} alt={item.name} className="w-6 h-6 mr-2" />
                                        {item.name}
                                    </td>
                                    <td style={{ width: '120px', minWidth: '110px' }} className="p-4 text-center">{item.price}</td>
                                    <td style={{ width: '110px', minWidth: '100px' }} className="p-4 text-center">
                                        <img src={item.changeType === "up" ? green : red} alt="change" className="w-4 h-4 inline-block mr-1" />
                                        <span className={item.changeType === "up" ? "text-green-500" : "text-red-500"}>
                                            {item.change}
                                        </span>
                                    </td>
                                    <td style={{ width: '150px', minWidth: '120px' }} className="p-4 text-center">{item.volume}</td>
                                    <td style={{ width: '180px', minWidth: '150px' }} className="p-4 text-center">{item.marketCap}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MarketOverview;