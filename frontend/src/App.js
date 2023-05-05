import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer';
import MainRoutes from './Pages/MainRoutes';
import CategoryPage from './Pages/CategoryPage';



function App() {
  return (
    <div className="App">

      {/* <MainRoutes/> */}
    <CategoryPage/>
    
    </div>
  );
}

export default App;
