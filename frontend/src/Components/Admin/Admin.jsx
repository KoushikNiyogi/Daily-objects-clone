import React from "react";
import Navbar from "./Navbar";
import MainDashboard from "./AdminComponents/MainDashboard/MainDashboard";

import "../../Styling/admin.module.css";
const Admin = () => {
  return (
    <div className="Admin">
      <Navbar />
      <MainDashboard />
    </div>
  );
};

export default Admin;
