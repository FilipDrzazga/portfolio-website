import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation/Navigation";
import BioPage from "./pages/BioPage/BioPage";
import PlaygroundPage from "./pages/PlaygroundPage/PlaygroundPage";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/bio" element={<BioPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
      </Routes>
    </>
  );
};

export default App;
