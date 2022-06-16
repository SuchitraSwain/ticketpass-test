import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from './Routes/Routes';

const App: React.FC = () => (
  <BrowserRouter>
    <CustomRoutes />
  </BrowserRouter>
);

export default App;
