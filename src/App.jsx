import Details from "./components/Details";
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
    </div>
  )
}

export default App;