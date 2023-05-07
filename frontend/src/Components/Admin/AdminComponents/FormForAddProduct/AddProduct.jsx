import React from "react";
import {
  Box,
  FormControl,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Grid,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import axios from "axios";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Navbar from "../../Navbar";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [color, setColor] = useState("");

  const [price, setPrice] = useState(0);

  const [Heading1, setHeading1] = useState("");
  const [Heading2, setHeading2] = useState("");

  const [Content1, setContent1] = useState("");
  const [Content2, setContent2] = useState("");

  const [dis_Price, setDisPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [brand, setBrand] = useState(0);
  const toast = useToast();

  const products = {
    title: title,
    description: description,
    category: category,
    color: color,
    brand: brand,
    images: [
      {
        url: url1,
      },
      {
        url: url2,
      },
      {
        url: url3,
      },
    ],
    details: [
      {
        heading: Heading1,
        content: Content1,
      },
      {
        heading: Heading2,
        content: Content2,
      },
    ],
    price: +price,

    discounted_price: +dis_Price,
    discount: +discount,
  };
  // https://pajamas-bonobo.cyclic.app/product/add
  const submitData = () => {
    console.log(products);
    axios({
      method: "post",
      url: `https://pajamas-bonobo.cyclic.app/product/add`,
      data: JSON.stringify(products),
      headers: {
        Authorization: `${localStorage.getItem("adminToken")}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.success == true) {
          toast({
            title: "Data Added successful",
            position: "top",
            isClosable: true,
            duration: 5000,
          });
        } else {
          toast({
            title: "error",
            position: "top",
            isClosable: true,
            duration: 5000,
          });
        }
      })
      .catch((err) => console.log(err));
    console.log(products);
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <h1>AddProduct</h1>
      <Box id="Form">
        <Stack display={"block"} align={"center"}>
          <Heading fontSize={"4xl"}>Add New Product</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            If don't want to add something{" "}
            <RouterLink to={"/allproducts"} color={"blue.400"}>
              <span style={{ color: "#0a9286", fontWeight: "bold" }}>
                {" "}
                Click here
              </span>
            </RouterLink>{" "}
            ✌
          </Text>
        </Stack>
        <Button onClick={refresh}>Refresh</Button>
        <div
          display={{ base: "grid", md: "grid", xl: "flex", "2xl": "flex" }}
          justifycontent={{ xl: "space-around", "2xl": "space-around" }}
          alignitems={{ xl: "center", "2xl": "center" }}
        >
          <div display="grid" style={{ margin: "50px", gap: "2rem" }}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
                xl: "repeat(3, 1fr)",
                "2xl": "repeat(3, 1fr)",
              }}
              gap={"2rem"}
              align={"center"}
              justify={"center"}
            >
              <Stack>
                <Heading>Basic</Heading>
                <Input
                  type="text"
                  value={title}
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Category"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Image Url1"
                  onChange={(e) => setUrl1(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Image Url2"
                  onChange={(e) => setUrl2(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Image Url3"
                  onChange={(e) => setUrl3(e.target.value)}
                />

                <Input
                  type="text"
                  placeholder="Color"
                  onChange={(e) => setColor(e.target.value)}
                />
              </Stack>
              <Stack>
                <Heading>Details</Heading>
                <Input
                  type="text"
                  placeholder="Heading1"
                  onChange={(e) => setHeading1(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Content1"
                  onChange={(e) => setContent1(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Heading2"
                  onChange={(e) => setHeading2(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Content2"
                  onChange={(e) => setContent2(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Brand"
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Stack>
              <Stack>
                <Heading>Price & Status</Heading>

                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="$"
                  />
                  <Input
                    type={"number"}
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <InputRightElement
                    children={<CheckIcon color="green.500" />}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="$"
                  />
                  <Input
                    type={"number"}
                    placeholder="Discounted Price"
                    onChange={(e) => setDisPrice(e.target.value)}
                  />
                  <InputRightElement
                    children={<CheckIcon color="green.500" />}
                  />
                </InputGroup>
              </Stack>
            </Grid>
            <Button
              style={{ width: "70%", margin: "20px" }}
              onClick={submitData}
            >
              Submit
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default AddProduct;
