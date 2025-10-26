import { Routes, Route, Navigate, useLocation } from "react-router";
import Navigation from "./components/Navigation/Navigation";
import BioPage from "./pages/BioPage/BioPage";
import PlaygroundPage from "./pages/PlaygroundPage/PlaygroundPage";
import PageTransition from "./components/PageTransition/PageTransition";

const App = () => {
  const location = useLocation();
  return (
    <>
      {/* <PageTransition pathName={location.pathname}> */}
      <Navigation />
      <Routes location={location}>
        <Route path="/" element={<Navigate to="/bio" replace />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="*" element={<Navigate to="/bio" replace />} />
      </Routes>
      {/* </PageTransition> */}
    </>
  );
};

export default App;
