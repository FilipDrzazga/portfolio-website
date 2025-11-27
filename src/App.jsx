import { Routes, Route, Navigate, useLocation } from "react-router";
import Navigation from "./components/Navigation/Navigation";
import BioPage from "./pages/BioPage/BioPage";
import PlaygroundPage from "./pages/PlaygroundPage/PlaygroundPage";
import ThreeCanvas from "./components/ThreeCanvas/ThreeCanvas";

const App = () => {
  const location = useLocation();
  return (
    <>
      <ThreeCanvas />
      <Navigation />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/bio" replace />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="*" element={<Navigate to="/bio" replace />} />
      </Routes>
    </>
  );
};

export default App;
