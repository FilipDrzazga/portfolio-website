import { BrowserRouter, Routes, Route } from "react-router";
import BioPage from "./pages/BioPage";
import PlaygroundPage from "./pages/PlaygroundPage";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio-website">
      <Routes>
        <Route path="/" element={<BioPage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
