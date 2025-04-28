import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Uwa from "./components/Uwa";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/uwa" element={<Uwa />} />
    </Routes>
  )
}

export default App;