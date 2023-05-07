import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Input,
  Link,
  Flex,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { CloseIcon, HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import { SidebarData } from "../../AdminData/adminData";
const AdminHamMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box>
      <IconButton
        icon={<HamburgerIcon />}
        //   display={{ md: "none" }}
        color="black"
        onClick={isOpen ? onClose : onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader backgroundColor="white"></DrawerHeader>
          <DrawerBody backgroundColor="white">
            <VStack alignItems="center" className="left" gap={"20"}>
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default AdminHamMenu;
