import { Routes, Route, Navigate, useLocation } from "react-router";
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
          <Route path="/" element={<Navigate to="/bio" replace />} />
          <Route index path="/bio" element={<BioPage />} />
          <Route path="playground" element={<PlaygroundPage />} />
        </Routes>
      </PageTransition>
    </>
  );
};

export default App;
