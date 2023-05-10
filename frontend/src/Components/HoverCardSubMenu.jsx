import { Box } from "@chakra-ui/react";
import React from "react";

const HoverCardSubMenu = (props) => {
  const menuarr = props.menuarr;
  return (
    <Box width="100%" textAlign="left" marginTop="8%">
      {menuarr.map((ele) => (
        <h2>{ele.name}</h2>
      ))}
    </Box>
  );
};

export default HoverCardSubMenu;
