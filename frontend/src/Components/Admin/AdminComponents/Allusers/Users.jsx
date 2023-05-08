import React from "react";
import Navbar from "../../Navbar";
import { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import UserCard from "./usercard";

import Spinners from "./Spinner";

const Links = [""];

const Users = () => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  const [product, setProduct] = useState("");

  // https://pajamas-bonobo.cyclic.app/

  const getData = async () => {
    setStatus(false);

    try {
      let res = await axios({
        method: "GET",
        url: `https://pajamas-bonobo.cyclic.app/user/`,
        headers: {
          Authorization: `${localStorage.getItem("adminToken")}`,
        },
      });
      console.log(res);
      setData(res.data.users);
      setStatus(true);
    } catch (error) {
      setStatus(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    console.log(data);
    getData();
  }, []);

  const handleSearch = () => {};

  // Links[0] = `Total_${data.length}`;
  return (
    <div>
      <Navbar />
      <h1>AllUsers</h1>
      {/* <h1 style={{fontSize:"30px", textAlign:"left",fontWeight:"bolder",padding:"20px"}}>Products</h1> */}
      <div style={{ display: "flex", flexBasis: "row", width: "100%" }}>
        <Box
          margin={{
            base: "0px 0px 0px 30px ",
            md: "0px 0px 0px 210px",
            xl: " 0px 0px 0px 180px",
            "2xl": " 0px 0px 0px 250px",
          }}
          style={{ width: "80%" }}
        >
          <SimpleGrid
            columns={{ base: "2", "529px": "3", "848px": "4" }}
            spacing={"20px"}
            mt="50px"
            p={4}
            gap="1rem"
            display="grid"
            marginTop={"5rem"}
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
          >
            {!status ? (
              <Spinners />
            ) : data?.length > 0 ? (
              data?.map((el, index) => {
                return <UserCard key={index} {...el} getData={getData} />;
              })
            ) : (
              ""
            )}
          </SimpleGrid>
        </Box>
      </div>
    </div>
  );
};

export default Users;
{
  /* <SimpleGrid
columns={{ base: "2", "529px": "3", "848px": "4" }}
spacing={"20px"}
mt="50px"
> */
}
