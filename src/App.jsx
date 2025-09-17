import { Routes, Route, useLocation } from "react-router";
import Navigation from "./components/Navigation/Navigation";
import BioPage from "./pages/BioPage/BioPage";
import PlaygroundPage from "./pages/PlaygroundPage/PlaygroundPage";
import PageTransition from "./components/PageTransition/PageTransition";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navigation />
      <PageTransition pathName={location.pathname}>
        <Routes location={location}>
          <Route index path="/portfolio-website/bio" element={<BioPage />} />
          <Route path="/portfolio-website/playground" element={<PlaygroundPage />} />
        </Routes>
      </PageTransition>
    </>
  );
};

export default App;
