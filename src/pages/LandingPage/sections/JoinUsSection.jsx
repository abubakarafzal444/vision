import { Box } from "@mui/system";
import React from "react";
import stripeImg from "assets/Abstractstripes.svg";
import TwitterIcon from '@mui/icons-material/Twitter';
import MemoryIcon from '@mui/icons-material/Memory';

const JoinUsSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: {sm:"180px",xs:"77px"},
        background: `transparent url(${stripeImg}) no-repeat right 20% top -48px`,
      }}
    >
      <Box
        sx={{
          font: {sm:"normal normal 600 45px/55px Montserrat,sans-serif",xs:"normal normal 600 30px Montserrat,sans-serif",},
          color: "#A29BFF",
        }}
      >
        Join us!
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {sm:"row",xs:"column"},
          font: {sm:"normal normal 400 26px/25px Montserrat,sans-serif",xs:"normal normal 400 20px Montserrat,sans-serif"},
        marginTop: {sm:"32px",xs:"37px"},
        }}
      >
        <Box
          cpmponent="p"
          sx={{
            color: "#E4E6FD",
            marginRight: {sm:"65px"},
            textDecoration: "underline",

          }}
        >
          <Box
            component="span"
            sx={{
              width: "32px",
              height: "37px",
              color:"#A29BFF",
              marginRight:"5px",
            }}
          ><MemoryIcon/></Box>
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
              color:"#A29BFF",
              marginRight:"5px",

            }}
          ><TwitterIcon/></Box>
          project_name
        </Box>
      </Box>
      <Box sx={{ marginTop: {sm:"250px",xs:"160px" },display:"flex",justifyContent:"center"}}>
        <Box component="p" sx={{font:"normal normal normal 16px/25px Montserrat;",marginBottom: {sm:"50px",xs:"21px"},textAlign:"center",width:{sm:"unset",xs:"70%"}}}>
          Copyright 2022 Projekt_name. all rights reserved
        </Box>
      </Box>
    </Box>
  );
};

export default JoinUsSection;
