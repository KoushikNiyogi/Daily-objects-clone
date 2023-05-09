import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import "./orderpage.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import axios from "axios";
const OrderPage = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(false);
  const config = {
    headers: {
      Authorization: `${localStorage.getItem("adminToken")}`,
    },
  };

  const newData = {
    dispatch: !value,
  };

  const getData = () => {
    axios
      .get(`https://pajamas-bonobo.cyclic.app/adminorder/`, config)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handleChangePayment = (_id, newData) => {
    axios({
      method: "PATCH",
      url: `https://pajamas-bonobo.cyclic.app/adminorder/update/${_id}`,
      data: newData,
      headers: {
        Authorization: `${localStorage.getItem("adminToken")}`,
      },
    })
      .then((res) => {
        getData();
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <TableContainer className="Table">
        <h2
          style={{
            fontSize: "30px",
            textAlign: "left",
            fontWeight: "bolder",
            padding: "20px",
            marginTop: "10rem",
          }}
        >
          Recent Orders
        </h2>
        <Table
          style={{ borderRadius: "10px" }}
          variant="striped"
          colorScheme="teal"
        >
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>UserID</Th>
              <Th>Products Name</Th>
              <Th>Quantity</Th>
              <Th>Total Amount OF Transaction</Th>
              <Th>Dispatch</Th>
              <Th>Status Of Order</Th>
              <Th>Edit Order Dispatch</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.length > 0 &&
              data?.map((el) => {
                return (
                  <Tr key={el._id}>
                    <Td>{el.userId}</Td>
                    <Td>{el.title}</Td>
                    <Td>{el.quantity}</Td>
                    <Td>{el.price * el.quantity}</Td>
                    <Td>{el.dispatch ? "YES" : "NO"}</Td>
                    <Td>{el.payment ? "Successful" : "Pending"}</Td>
                    <Td>
                      <RadioGroup
                        onChange={() => {
                          handleChangePayment(el._id, newData);
                          console.log(newData);
                        }}
                        value={el.dispatch}
                      >
                        <Stack direction="row">
                          <Radio value={false}>Pending</Radio>
                          <Radio value={true}>Success</Radio>
                        </Stack>
                      </RadioGroup>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrderPage;
