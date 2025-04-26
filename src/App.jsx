import Details from "./components/Details";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MarketOverview from "./components/MarketOverview";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Details />
      <MarketOverview />
      <Footer />
    </div>
  )
}

export default App;