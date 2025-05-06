import { Routes, Route, useLocation } from "react-router";
import AnimatedRoutes from "../components/AnimatedRoutes/AnimatedRoutes";
import BioPage from "../pages/BioPage/BioPage";
import PlaygroundPage from "../pages/PlaygroundPage/PlaygroundPage";
import Navbar from "../components/Navigation/Navbar";

const PageRoutes = () => {
  const location = useLocation();
  return (
    <AnimatedRoutes locationPathName={location.pathname}>
      <Navbar />
      <Routes location={location}>
        <Route index element={<BioPage />} />
        <Route path="bio" element={<BioPage />} />
        <Route path="playground" element={<PlaygroundPage />} />
      </Routes>
    </AnimatedRoutes>
  );
};

export default PageRoutes;
