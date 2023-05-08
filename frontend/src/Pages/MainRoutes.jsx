
import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from "./HomePage"
import Signup from "./Signup"
import Login from "./Login"
import Dashboard from "./Dashboard"
import ProductPage from "./ProductPage"
import SearchPage from "./SearchPage"
import ShoppingBag from './ShoppingBag'
import Checkout from './Checkout'
import Payments from './Payments'
import Admin from '../Components/Admin/Admin'
import Products from '../Components/Admin/AdminComponents/ProductRoute/Products'
import AddProduct from '../Components/Admin/AdminComponents/FormForAddProduct/AddProduct'
import Users from '../Components/Admin/AdminComponents/Allusers/Users'
import OrderPage from '../Components/Admin/AdminComponents/OrderPage/OrderPage'
import { Categorypage } from './Categorypage'
import AdminLogin from "./AdminLogin"
import CombinedFilter_sort from '../Components/SearchPage.jsx/CombinedFilter_sort'

const MainRoutes = () => {
  return (
    <Routes>
     
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/products" element={<Categorypage/>} />
        <Route path="/products/:id" element={<ProductPage/>} />
        <Route path="/SearchPage" element={<SearchPage/>} />
        <Route path="/ShoppingBagPage" element={<ShoppingBag />} />
        <Route path="/CheckoutPage" element={<Checkout />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/admindashboard" element={<Admin />}></Route>
        <Route path="/allproducts" element={<Products />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/allusers" element={<Users />}></Route>
        <Route path="/orderpage" element={<OrderPage />}></Route>
        <Route path='/combinefilter_sort' element={<CombinedFilter_sort/>}></Route>
        {/* <Route path="*" element={
        <div style={{width:"40%",margin:"auto"}}> */}

      {/* ALL ADMIN ROUTES ARE HERE  */}
      <Route path="/admindashboard" element={<Admin />} />
      <Route path="/allproducts" element={<Products />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/allusers" element={<Users />} />
        
      <Route path="/orderpage" element={<OrderPage />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
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
  );
};

export default MainRoutes;
