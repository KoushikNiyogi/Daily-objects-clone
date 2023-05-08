import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "./AdminData/adminData";
import { useToast } from "@chakra-ui/toast";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Logo from "./images/daily_e.png";
import AdminHamMenu from "./AdminComponents/AdminDrawer/AdminDrawer";
import { useSelector } from "react-redux";
const Links = [""];

const NavLink = ({ children }) => (
  <RouterLink
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
  </RouterLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();
  const toast = useToast();

  const nevigate = useNavigate();
  const logout = () => {
    localStorage.setItem("isAuth", false);
    toast({
      title: "Logout successful",
      status: "success",
      position: "top",
    });
    localStorage.setItem("adminToken", "");
    nevigate("/adminlogin");
  };

  //   https://awful-pear-bedclothes.cyclic.app/

  const isAuthadmin = useSelector((store) => store.adminloginReducer.isAuth);

  const getData = (page) => {
    setStatus(false);
    axios
      .get(
        `https://awful-pear-bedclothes.cyclic.app/api/products?keyword=${text}&page=${page}`
      )
      .then((res) => {
        // console.log(res)
        setData(res.data.products);
        setTotal(res.data.productsCount);
        setCount(res.data.resultPerPage);
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
  // console.log(last);

  Links[0] = `Total_${total}`;
  return (
    <div>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="fixed"
        width={"100%"}
        zIndex="100"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box width={"10%"}>
              <RouterLink to={"/admindashboard"}>
                <Image width={"100%"} src={Logo} />
              </RouterLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <Box width={"50%"}>
              <Input
                width={"50%"}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={"Search"}
              />
              <Button onClick={() => handleSearch()}>
                <FaSearch width={"20px"} />
              </Button>
            </Box>
            <Flex gap={"6"} display={["none", "none", "none", "flex"]}>
              {SidebarData.map((item, index) => {
                return (
                  <Flex key={index}>
                    <item.icon />
                    <div>
                      <span>{item.heading}</span>
                    </div>
                  </Flex>
                );
              })}
            </Flex>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.githubusercontent.com/u/67824841?v=4"}
                />
              </MenuButton>
            </Menu>

            {isAuthadmin ? (
              <RouterLink onClick={logout} to={"/adminlogin"}>
                <Flex p={"2"} className="menuItem">
                  <Text>signout</Text> <UilSignOutAlt />
                </Flex>
              </RouterLink>
            ) : (
              ""
            )}

            <Box display={["flex", "flex", "flex", "none"]}>
              <AdminHamMenu />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
