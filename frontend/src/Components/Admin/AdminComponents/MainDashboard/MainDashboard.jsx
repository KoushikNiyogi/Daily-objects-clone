import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Tables/Tables";
import "./MainDashboard.css";
import Right from "../Right/Right";
import { Box, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainDashboard = () => {
  const isAuthadmin = useSelector((store) => store.adminloginReducer.isAuth);
  const nevigate = useNavigate();

  if (!isAuthadmin) {
    nevigate("/adminlogin");
  }

  return (
    <div className="MainDash">
      <HStack flexDirection={{ base: "column", md: "column", xl: "row" }}>
        <Box width={"80%"} height={"auto"}>
          <h1
            style={{
              fontSize: "30px",
              textAlign: "left",
              fontWeight: "bolder",
              marginBottom: "4rem",
            }}
          >
            Dashboard
          </h1>
          <Cards />
          <Table />
        </Box>

        <Box width={{ base: "100%", xl: "20%" }} height={"auto"}>
          <h3>Updates</h3>
          <Right />
        </Box>
      </HStack>
    </div>
  );
};

export default MainDashboard;
