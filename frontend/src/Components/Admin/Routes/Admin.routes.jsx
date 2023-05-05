import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin";
import AddProduct from "../AdminComponents/FormForAddProduct/AddProduct";
import Users from "../AdminComponents/Allusers/Users";
import Products from "../AdminComponents/ProductRoute/Products";
import OrderPage from "../AdminComponents/OrderPage/OrderPage";
const AdminAllroutes = () => {
  return (
    <div>
      {/* Alll admin Routes  */}
      <Routes>
        <Route path="/admindashboard" element={<Admin />}></Route>
        <Route path="/allproducts" element={<Products />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>

        <Route path="/allusers" element={<Users />}></Route>

        <Route path="/orderpage" element={<OrderPage />}></Route>
        <Route
          path="*"
          element={
            <div style={{ width: "40%", margin: "auto" }}>
              <h1>ERROR 404</h1>
              <h1>Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default AdminAllroutes;
