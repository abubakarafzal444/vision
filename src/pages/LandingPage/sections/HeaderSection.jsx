import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import stripeImg from "assets/Abstractstripes.svg";
import BuySell2 from "assets/Buysell2.png";
import centerImg from "assets/23123.png";
import BuyWeth2 from "assets/BuyWETH2.png";
const HeaderSection = () => {
  return (
    <Box component="header">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          component="h1"
          sx={{
            font: "normal normal bold 94px/102px Montserrat, sans-serif",
            marginTop: "130px",
          }}
        >
          <Box component="span" sx={{ color: "#E4E6FD" }}>
            Cut Out the
          </Box>
          <Box component="span" sx={{ color: "#A29BFF" }}>
            {" "}
            Middleman
          </Box>
        </Box>
        <Box
          component="h2"
          sx={{
            font: "normal normal 300 18px/45px Montserrat,sans-serif",
            marginTop: "10px",
            color: "#F5F5F5",
          }}
        >
          Trade crypto directly peer-to-peer anywhere in the world using any
          payment method.
        </Box>
        <Button
          variant="contained"
          endIcon={
            <ArrowForwardIosIcon sx={{ fontSize: "10px", marginTop: "3px" }} />
          }
          sx={{
            background: "#A29BFF 0% 0% no-repeat padding-box",
            borderRadius: "23px",
            width: "94px",
            height: "46px",
            font: "normal normal 600 21px/22px Montserrat,sans-serif",
            color: "#08061C",
            marginTop: "27px",
            width: "190px",
            textTransform: "unset",
            marginLeft: "2px",
            "&:hover": {
              transform: "scale(1.5,1.1)",
              background: "#A29BFF 0% 0% no-repeat padding-box",
            },
          }}
        >
          Trade now
        </Button>
      </Box>
      <Box
        sx={{
          height: "819px",
          background: `transparent url(${stripeImg}) 0% 0% no-repeat padding-box`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "100%",
            background: `transparent url(${centerImg}) no-repeat right 50% top 2px`,
            opacity: "1",
            height: "846px",
            width: "972px",
          }}
        >
          <Box
            sx={{
              background: `transparent url(${BuySell2}) 0% 0% no-repeat padding-box`,
              opacity: "1",
              height: "369px",
              minWidth: "307px",
              zIndex: "5",
              marginLeft: "12%",
              marginTop: "210px",
            }}
          ></Box>

          <Box
            sx={{
              background: `transparent url(${BuyWeth2}) 0% 0% no-repeat padding-box;`,
              opacity: "1",
              height: "409px",
              width: "520px",
              zIndex: "5",
              marginRight: "6.5%",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderSection;
