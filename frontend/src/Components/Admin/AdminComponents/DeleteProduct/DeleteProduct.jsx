import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

function DeleteProduct({ id, getData }) {
  let _id = id;
  // console.log(_id);
  const toast = useToast();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  // api/admin/product/

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const Delete = async (_id) => {
    console.log(_id, "update data");
    try {
      const config = {
        headers: {
          Authorization: `${localStorage.getItem("adminToken")}`,
        },
      };

      const response = await axios.delete(
        `https://pajamas-bonobo.cyclic.app/product/delete/${_id}`,
        config
      );

      getData();

      toast({
        title: "Data deleted successful",
        position: "top",
        status: "success",
        isClosable: true,
        duration: 5000,
      });

      console.log(response.data); // the deleted post data
    } catch (error) {
      console.error(error);

      toast({
        title: "Something went wrong",
        status: "error",
        position: "top",
        isClosable: true,
        duration: 5000,
      });
    }
  };

  return (
    <>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Delete
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Delete Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to delete this product....</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                Delete(_id);
                // deleteFunc()
                onClose();
              }}
            >
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteProduct;
