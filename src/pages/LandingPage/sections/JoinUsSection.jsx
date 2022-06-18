import { Box } from "@mui/system";
import React from "react";
import stripeImg from "assets/Abstractstripes.svg";
import Discord from "assets/Discord.svg";
import Twitter from "assets/Twitter.svg";

const JoinUsSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: { sm: "180px", xs: "77px" },
        background: `transparent url(${stripeImg}) no-repeat right 20% top -48px`,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box className="circle-parent join-now-parent"></Box>
        <Box className="circle-child join-now-child"></Box>
        <Box
        component="h3"
          sx={{
            position: "relative",
            left:{md:"unset",xs:"40px"},
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
            marginRight: { sm: "65px" },
            textDecoration: "underline",
            zIndex: "15",
            position: "relative",
            display:"flex"
          }}
        >
          <Box
            sx={{
              width: "32px",
              height: "37px",
              marginRight: "5px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${Discord}) `,
            }}
          >
          </Box>
          project_name
        </Box>
        <Box
          cpmponent="p"
          sx={{
            color: "#E4E6FD",
            textDecoration: "underline",
            zIndex: "15",
            position: "relative",
            display:"flex"
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
          >
          </Box>
          project_name
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
  );
};

export default JoinUsSection;
