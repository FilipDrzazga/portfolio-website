import { BrowserRouter } from "react-router";
import PageRoutes from "./routes/PageRoutes";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio-website">
      <PageRoutes />
    </BrowserRouter>
  );
};

export default App;
