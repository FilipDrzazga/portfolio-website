import { Routes, Route } from "react-router";
import Layout from "./components/ui/Navbar";
import BioPage from "./pages/BioPage";
import PlaygroundPage from "./pages/PlaygroundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/portfolio-website/" element={<Layout />}>
          <Route path="bio" element={<BioPage />} />
          <Route path="playground" element={<PlaygroundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
