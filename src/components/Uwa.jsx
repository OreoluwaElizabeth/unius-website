import Navbarw from "./Navbarw";

const Uwa = () => {
    return (
        <div className="min-h-screen">
            <Navbarw />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-3xl md:text-4xl font-semibold text-[#04203A] mb-5">
                        Universal Wallet Address <br/>(UWA)
                    </h1>
                    <p className="text-lg sm:text-base md:text-lg text-[#808080] mb-12">
                        Simplify crypto with one address for all blockchains. Send and
                        receive with ease using your UWA,<br/> like <span className="font-semibold">johndoe.UNIUS</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-16 mb-12">
                    <div className="bg-[#04203A] text-white p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-center w-full">
                        <h2 className="text-xl font-semibold mb-3"> One ID, All Chains</h2>
                        <p>
                            Use a single ID (e.g., <span className="font-semibold">johndoe.unius</span>)
                            to manage Ethereum, Bitcoin, Solana, and more-no more juggling addresses.
                        </p>
                    </div>
                    <div className="bg-[#04203A] text-white p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-center w-full">
                        <h2 className="text-xl font-semibold mb-3">Wallet-Driven</h2>
                        <p>
                            Create and manage your UWA directly in your wallet, like MetaMask,
                            Trust Wallet, with no extra steps.
                        </p>
                    </div>
                    <div className="bg-[#04203A] text-white p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-center w-full">
                        <h2 className="text-xl font-semibold mb-3">Fast & Secure</h2>
                        <p>
                            Powered by the Sui blockchain for instant transactions and rock-solid security, with minimal fees.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#04203A] mb-8">How UWA Works</h2>
                    <div className="space-y-8 max-w-2xl mx-auto text-left">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                                1
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Claim Your UWA</h3>
                                <p className="text-gray-600">
                                    In your wallet, pick a username like "johndoe". It becomes <span className="font-semibold">johndoe.unius</span>,
                                    unique to you.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                                2
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Link Your Addresses</h3>
                                <p className="text-gray-600">
                                    Add your Ethereum, Bitcoin, or other addresses in your wallet's settings. They're tied to your UWA securely on Sui.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                                3
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Send & Receive</h3>
                                <p className="text-gray-600">
                                    Share your UWA. Anyone can send crypto to it, and our system routes it to the right address-no gas fees for lookups.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#bcd9f7] rounded-xl p-8 text-center my-12">
                    <h2 className="text-3xl font-bold text-[#04203A] mb-4">For Wallet Developers</h2>
                    <p className="mb-7">Integrate UWA with four simple API calls.Make your Wallet stand out by offering<br/> users a single address for all their crypto needs.</p>
                    <a href="#" className="inline-block px-6 py-3 border border-[#62A2E0] bg-[#62A2E0] text-white rounded-full hover:bg-blue-700 hover:text-white transition">View API Docs</a>
                </div>
                <div className="text-center my-12">
                    <h2 className="text-3xl font-bold text-[#04203A] mb-4">Powered by Sui</h2>
                    <p className="mb-7">We chose the Sui blockchain for its lightning-fast transactions, low fees (~$0.005 per action), and<br/>robust security via the Move language. Your UWA is safe, permanent, and ready for millions of users.</p>
                </div>
                <div className="text-center my-12">
                    <h2 className="text-3xl font-bold text-[#04203A] mb-4">Ready to Simplify Crypto?</h2>
                    <p className="mb-7">Ask your wallet to support UWA today, or reach out if you're a developer looking to integrate.</p>
                    <a href="#" className="inline-block px-6 py-3 border border-[#62A2E0] bg-[#62A2E0] text-white rounded-full hover:bg-blue-700 hover:text-white transition">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Uwa;
