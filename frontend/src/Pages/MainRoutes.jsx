import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from "./HomePage"
import Signup from "./Signup"
import Login from "./Login"
import Dashboard from "./Dashboard"
import ProductPage from "./ProductPage"
import SearchPage from "./SearchPage"
import CategoryPage from './CategoryPage'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/products" element={<CategoryPage/>} />
        <Route path="/products/:id" element={<ProductPage/>} />
        <Route path="/SearchPage" element={<SearchPage/>} />
        <Route path="*" element={<div style={{width:"40%",margin:"auto"}}>
            <h1>ERROR 404</h1>
            <h1>Page Not Found</h1>
        </div>} />
    </Routes>
  )
}

export default MainRoutes