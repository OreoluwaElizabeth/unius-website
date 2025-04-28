import Details from "./Details";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import MarketOverview from "./MarketOverview";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Details />
            <MarketOverview />
            <Footer />
        </div>
    );
};

export default Home;