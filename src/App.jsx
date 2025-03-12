import { Routes, Route } from "react-router";
import BioPage from "./pages/BioPage";
import PlaygroundPage from "./pages/PlaygroundPage";


const App = () => {
  return (
      <Routes>
          <Route path='/bio' element={<BioPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
      </Routes>
  );
};

export default App;
