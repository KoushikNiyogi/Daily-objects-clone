import logo from "./logo.svg";
import "./App.css";

import Footer from "./Components/Footer";
import MainRoutes from "./Pages/MainRoutes";
import AdminAllroutes from "./Components/Admin/Routes/Admin.routes";

function App() {
  return (
    <div className="App">
      <AdminAllroutes />
      {/* <MainRoutes /> */}
    </div>
  );
}

export default App;
