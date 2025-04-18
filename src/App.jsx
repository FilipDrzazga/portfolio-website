import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navigation/Navbar";
import BioPage from "./pages/BioPage/BioPage";
import PlaygroundPage from "./pages/PlaygroundPage/PlaygroundPage";
import Loader from "./components/Loader/Loader";
import { usePageStore } from "./store/useStore";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio-website">
      <Navbar />
      <Routes>
        <Route path="/" element={<BioPage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
