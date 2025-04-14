import cube1 from "../assets/images/cube 1.png";
import cube3 from "../assets/images/cube 3.png";
import cube2 from "../assets/images/cube 2.png";
import cube4 from "../assets/images/cube 4.png";
import cube5 from "../assets/images/cube 5.png";
import cube6 from "../assets/images/cube 6.png";
import play from "../assets/images/play store 1.png";
import web from "../assets/images/famicons--globe 1.png";
import apple from "../assets/images/Apple.png";

const HeroSection = () => {
    return (
        <div className="relative bg-[#04203A] text-white h-screen">
            <div className="container mx-auto text-center py-28 px-4">
                {/* Cube Images with Responsive Positioning */}
                <img
                    src={cube1}
                    alt="cube"
                    className="absolute top-[-30px] left-[10%] w-[8%] opacity-75 sm:w-[10%] md:top-[-30px] md:left-[300px] md:w-32"
                />
                <img
                    src={cube3}
                    alt="cube"
                    className="absolute top-[55px] right-[5%] w-[8%] opacity-75 sm:w-[10%] md:top-[55px] md:right-0 md:w-32"
                />
                <img
                    src={cube2}
                    alt="cube"
                    className="absolute bottom-[10%] left-[50%] w-[8%] opacity-75 sm:w-[10%] md:bottom-0 md:left-[720px] md:w-32"
                />
                <img
                    src={cube4}
                    alt="cube"
                    className="absolute top-[40%] left-[20%] w-[8%] opacity-75 sm:w-[10%] md:top-[270px] md:left-[230px] md:w-32"
                />
                <img
                    src={cube5}
                    alt="cube"
                    className="absolute top-[30%] right-[20%] w-[8%] opacity-75 sm:w-[10%] md:top-[266px] md:left-[837px] md:w-32"
                />
                <img
                    src={cube6}
                    alt="cube"
                    className="absolute bottom-[5%] left-[5%] w-[6%] opacity-75 sm:w-[8%] md:bottom-[-20px] md:left-[-30px] md:w-20"
                />

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
                    All <span className="text-blue-400">Chains</span>, One{" "}
                    <span className="text-blue-400">Wallet</span>, Endless Opportunities
                </h1>
                <p className="text-md sm:text-lg md:text-xl mb-8">
                    Eliminates the complexity of managing multiple wallets and token swaps.
                    <br />
                    Bridging the gap between chains.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-20 mt-16">
                    <button
                        className="bg-[#62A2E0] hover:bg-blue-500 text-white flex items-center justify-center border border-[#3788D7]"
                        style={{
                            width: "148px",
                            height: "56px",
                            borderRadius: "20px",
                        }}
                    >
                        <img src={play} alt="google play" className="w-6 h-6 mr-2" />
                        <div className="text-left">
                            <div
                                className="font-normal text-center"
                                style={{
                                    width: "56px",
                                    height: "14px",
                                    fontSize: "12px",
                                    lineHeight: "100%",
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                GET IT ON
                            </div>
                            <div
                                className="font-medium text-center"
                                style={{
                                    width: "83px",
                                    height: "17px",
                                    fontSize: "15px",
                                    lineHeight: "100%",
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                Google Play
                            </div>
                        </div>
                    </button>
                    <button
                        className="bg-[#62A2E0] hover:bg-blue-500 text-white flex items-center justify-center border border-[#3788D7]"
                        style={{
                            width: "148px",
                            height: "56px",
                            borderRadius: "20px",
                        }}
                    >
                        <img src={web} alt="web app" className="w-6 h-6 mr-2" />
                        <div className="text-left">
                            <div
                                className="font-normal text-center"
                                style={{
                                    width: "56px",
                                    height: "14px",
                                    fontSize: "12px",
                                    lineHeight: "100%",
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                USE THE
                            </div>
                            <div
                                className="font-medium text-center"
                                style={{
                                    width: "83px",
                                    height: "17px",
                                    fontSize: "15px",
                                    lineHeight: "100%",
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                Web App
                            </div>
                        </div>
                    </button>
                    <button
                        className="bg-[#62A2E0] hover:bg-blue-500 text-white flex items-center justify-center border border-[#3788D7]"
                        style={{
                            width: "148px",
                            height: "56px",
                            borderRadius: "20px",
                        }}
                    >
                        <img src={apple} alt="app store" className="w-6 h-6 mr-2" />
                        <div className="text-left">
                            <div
                                className="font-normal text-center"
                                style={{
                                    width: "80px",
                                    height: "10px",
                                    fontSize: "12px",
                                    lineHeight: "100%",
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                Download on
                            </div>
                            <div
                                className="font-medium text-center"
                                style={{
                                    width: "83px",
                                    height: "17px",
                                    fontSize: "15px",
                                    lineHeight: "100%",
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                App Store
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;