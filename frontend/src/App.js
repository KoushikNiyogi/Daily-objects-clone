
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer';
import MainRoutes from './Pages/MainRoutes';
// import Footer from "./Components/Footer";
// import MainRoutes from "./Pages/MainRoutes";
import AdminAllroutes from "./Components/Admin/Routes/Admin.routes";
import { ProductList } from './Components/ProductList';
import { Categorypage } from './Pages/Categorypage';

function App() {
  return (
    <div className="App">
      {/* <MainRoutes /> */}
    < Categorypage/>
   
    </div>
  );
}

export default App;
