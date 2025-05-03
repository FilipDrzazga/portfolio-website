import { BrowserRouter } from "react-router";
import Navbar from "./components/Navigation/Navbar";

import PageRoutes from "./routes/PageRoutes";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio-website">
      <Navbar />
      <PageRoutes />
    </BrowserRouter>
  );
};

export default App;
