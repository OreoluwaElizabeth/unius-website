import Navbarw from "./Navbarw";

const Uwa = () => {
    return (
        <div className="min-h-screen">
            <Navbarw />

            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="text-center-mb-12">
                    <h1 className="text-4xl text-[#04203A] mb-4">
                        Universal Wallet Address (UWA)
                    </h1>
                    <p className="text-lg text-[#808080]">
                        Simplify crypto with one address for all blockchains. Send and
                        receive with ease using your UWA, like <span className="font-semibold">johndoe.UNIUS</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-[#04203A] text-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-3"> One ID, All Chains</h2>
                        <p>
                            Use a single ID (e.g., <span className="font-semibold">johndoe.unius</span>)
                            to manage Ethereum, Bitcoin, Solana, and more-no more juggling addresses.
                        </p>
                    </div>
                    <div className="bg-[#04203A] text-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-3">Wallet-Driven</h2>
                        <p>
                            Create and manage your UWA directly in your wallet, like MetaMask,
                            Trust Wallet, with no extra steps.
                        </p>
                    </div>
                    <div className="bg-[#04203A] text-white p-6 rounded-lg shadow-md">
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
                                    In your wallet, pick a username like "johndoe". It becomes <span className="font-semibold">johndoe.unius</span>
                                    (it can be customized and wallet specific e.g., <span className="font-semibold">johndoe:mask</span> 
                                    for metamask!), unique to you.
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
            </div>
        </div>
    )
}

export default Uwa;