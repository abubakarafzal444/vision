import { Box } from "@mui/system";
import React from "react";
import stripeImg from "assets/Abstractstripes.svg";

const JoinUsSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "370px",
        marginTop: "180px",
        background: `transparent url(${stripeImg}) no-repeat right 20% top -48px`,
      }}
    >
      <Box
        sx={{
          font: "normal normal 600 45px/55px Montserrat,sans-serif",
          color: "#A29BFF",
        }}
      >
        Join us!
      </Box>
      <Box
        sx={{
          display: "flex",
          font: "normal normal 400 26px/25px Montserrat,sans-serif",
          marginTop: "32px",
        }}
      >
        <Box
          cpmponent="p"
          sx={{
            color: "#E4E6FD",
            marginRight: "65px",
            textDecoration: "underline",
          }}
        >
          <Box
            component="span"
            sx={{
              width: "32px",
              height: "37px",
              background: "#A29BFF 0% 0% no-repeat padding-box",
            }}
          ></Box>
          project_name
        </Box>
        <Box
          cpmponent="p"
          sx={{ color: "#E4E6FD", textDecoration: "underline" }}
        >
          <Box
            component="span"
            sx={{
              width: "32px",
              height: "37px",
              background: "#A29BFF 0% 0% no-repeat padding-box",
            }}
          ></Box>
          project_name
        </Box>
      </Box>
      <Box sx={{ marginTop: "200px", marginButtom: "30px" }}>
        <Box component="p">
          Copyright 2022 Projekt_name. all rights reserved
        </Box>
      </Box>
    </Box>
  );
};

export default JoinUsSection;
