import { Box } from "@mui/system";
import React from "react";
import stripeImg from "assets/Abstractstripes.svg";
import Discord from "assets/Discord.svg";
import Twitter from "assets/Twitter.svg";

const JoinUsSection = () => {
  return (
       <Box sx={{  
     backgroundImage: `url(${stripeImg})`,
    backgroundPosition: { xs: "center" },
    backgroundSize: { xs: "cover" },
    marginTop: { xs: "100px", sm: "unset" },}}>
    <Box sx={{ maxWidth: "1920px", marginX: "auto" }}>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: { sm: "180px", xs: "77px" },
        // background: `transparent url(${stripeImg}) no-repeat right 20% top -48px`,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box className="circle-parent"></Box>
        <Box className="circle-child"></Box>
        <Box
          component="h3"
          sx={{
            position: "relative",
            left: { md: "unset", xs: "40px" },
            font: {
              sm: "normal normal 600 45px/55px Montserrat,sans-serif",
              xs: "normal normal 600 30px Montserrat,sans-serif",
            },
            color: "#A29BFF",
            zIndex: "6",
            width: "180px",
          }}
        >
          Join us!
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          font: {
            sm: "normal normal 400 26px/25px Montserrat,sans-serif",
            xs: "normal normal 400 20px Montserrat,sans-serif",
          },
          marginTop: { sm: "32px", xs: "37px" },
        }}
      >
        <Box
          cpmponent="p"
          sx={{
            color: "#E4E6FD",
            textDecoration: "underline",
            zIndex: "15",
            position: "relative",
            display: "flex",
            cursor: "pointer",
            marginRight: { sm: "65px" },
            alignItems: "center",


            "& .animated-link-btn": {
              minWidth: { sm: "180px" },
              background: {
                sm: "linear-gradient(to left, transparent 50%, #A29BFF 50%) right",
              },
              backgroundSize: { sm: "200%" },
              transition: { sm: ".3s ease-in" },
              paddingTop: { sm: "4px" },
              height:"100%",
            },
            "&:hover": {
              "& .animated-link-btn": {
                backgroundPosition: "left",
                color: { sm: "#020311" },
                fontWeight: { sm: "bold" },
              },
            },
          }}
        >
          <Box
            sx={{
              width: "32px",
              height: "37px",
              color: "#A29BFF",
              marginRight: "5px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${Discord}) `,
              
            "& .animated-link-btn": {
              minWidth: { sm: "180px" },
              background: {
                sm: "linear-gradient(to left, transparent 50%, #A29BFF 50%) right",
              },
              backgroundSize: { sm: "200%" },
              transition: { sm: ".3s ease-in" },
           
            },
            "&:hover": {
              "& .animated-link-btn": {
                backgroundPosition: "left",
                color: { sm: "#020311" },
                fontWeight: { sm: "bold" },
              },
            },
            }}
          ></Box>
          <Box
            className="animated-link-btn"
            component="span"
          >
            project_name
          </Box>
        </Box>
        <Box
          cpmponent="p"
          sx={{
            color: "#E4E6FD",
            textDecoration: "underline",
            zIndex: "15",
            position: "relative",
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
            "& .animated-link-btn": {
              minWidth: { sm: "180px" },
              background: {
                sm: "linear-gradient(to left, transparent 50%, #A29BFF 50%) right",
              },
              backgroundSize: { sm: "200%" },
              transition: { sm: ".3s ease-in" },
              paddingTop: { sm: "4px" },
              height:"100%",

            },
            "&:hover": {
              "& .animated-link-btn": {
                backgroundPosition: "left",
                color: { sm: "#020311" },
                fontWeight: { sm: "bold" },
              },
            },
          }}
        >
          <Box
            sx={{
              width: "32px",
              height: "37px",
              color: "#A29BFF",
              marginRight: "5px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${Twitter}) `,
            }}
          ></Box>
          <Box
            className="animated-link-btn"
            component="span"
          >
            project_name
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: { sm: "250px", xs: "160px" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="p"
          sx={{
            font: "normal normal normal 16px/25px Montserrat;",
            marginBottom: { sm: "50px", xs: "21px" },
            textAlign: "center",
            width: { sm: "unset", xs: "70%" },
          }}
        >
          Copyright 2022 Projekt_name. all rights reserved
        </Box>
      </Box>
    </Box>
    </Box>
    </Box>

  );
};

export default JoinUsSection;
