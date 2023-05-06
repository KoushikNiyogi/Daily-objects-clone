import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../AdminData/adminData";
import { Box } from "@chakra-ui/react";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update, index) => {
        return (
          <Box className="update" key={index} bg="transparent" p={4}>
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem", lineHeight: "-10px" }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </Box>
        );
      })}
    </div>
  );
};

export default Updates;
