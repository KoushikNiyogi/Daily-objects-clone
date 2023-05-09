import { useEffect, useState } from "react";
import {
  Box,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

import axios from "axios";

import Productcard from "../Card/Productcard";

import Spinners from "../Allusers/Spinner";
import Navbar from "../../Navbar";

const Links = [""];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Products() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();

  //   https://awful-pear-bedclothes.cyclic.app/
  // https://pajamas-bonobo.cyclic.app/product
  const getData = (page) => {
    setStatus(false);
    axios
      .get(`https://pajamas-bonobo.cyclic.app/product`)
      .then((res) => {
        console.log(res);
        setData(res.data.Data);
        setTotal(res.data.Data.length);
        setCount(res.data.Data.length);
        setStatus(true);
      })
      .catch((error) => {
        setStatus(false);
        console.log("error", error);
      });
  };

  useEffect(() => {
    //  console.log(data)
    getData(page);
  }, [page]);

  const handleSearch = () => {
    getData();
  };

  let last = Math.ceil(total / count);
  console.log(last);

  Links[0] = `Total_${total}`;

  return (
    <>
      <Navbar />
      {/* <h1 style={{fontSize:"30px", textAlign:"left",fontWeight:"bolder",padding:"20px"}}>Products</h1> */}
      <div style={{ display: "flex", flexBasis: "row", width: "100%" }}>
        {/* <CommonSidebar />   */}
        <Box
          margin={{
            base: "0px 0px 0px 30px ",
            md: "0px 0px 0px 200px",
            xl: " 0px 0px 0px 180px",
            "2xl": " 0px 0px 0px 250px",
          }}
          style={{ width: "80%" }}
        >
          <Box
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
            ) : (
              data.length !== [] &&
              data.map((el, index) => {
                return <Productcard key={index} {...el} getData={getData} />;
              })
            )}
          </Box>
          {/* <Box margin={"auto"} m={"20px"}>
            <Button
              m={"5px"}
              onClick={() => setPage((page) => page - 1)}
              disabled={page <= 1}
            >
              Prev
            </Button>
            <Button>{page}</Button>
            <Button
              m={"5px"}
              onClick={() => setPage((page) => page + 1)}
              disabled={page == 7}
            >
              Next
            </Button>
          </Box> */}
        </Box>
      </div>
    </>
  );
}
