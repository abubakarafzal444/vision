import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "assets/Arrowbutton.svg";
import stripeImg from "assets/Abstractstripes.svg";
import BuySell2 from "assets/Buysell2.png";
import centerImg from "assets/23123.png";
import centerImgMobile from "assets/23123@2x.png";
import BuyWeth2 from "assets/BuyWETH2.png";
const HeaderSection = () => {
  return (
    <Box component="header"sx={{display:{sm:"unset",xs:"flex"},flexDirection:"column-reverse"}}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          component="h1"
          sx={{
            font: {lg:"normal normal bold 94px/102px Montserrat, sans-serif",sm:"normal normal bold 65px Montserrat, sans-serif",xs:"normal normal bold 40px Montserrat, sans-serif"},
            marginTop: {sm:"130px",xs:"90px"},
            textAlign: "center",
            width:{md:"100%",sm:"85%",xs:"88%"},

          }}
        >
          <Box component="span" sx={{ color: "#E4E6FD" }}>
            Cut Out <Box component="br" sx={{display:{md:"none"}}}/>the
          </Box>
          <Box component="span" sx={{ color: "#A29BFF" }}>
            {" "}
            Middleman
          </Box>
        </Box>
        <Box
          component="h2"

          sx={{
            font: {sm:"normal normal 300 18px/45px Montserrat,sans-serif",xs:"normal normal 300 16px Montserrat,sans-serif"},
            marginTop: "10px",
            color: "#F5F5F5",
            textAlign: "center",
            width:{md:"100%",md:"80%",xs:"88%"},
            lineHeight:{sm:"unset",xs:"1.7"}
          }}
        >
          Trade crypto directly peer-to-peer anywhere in the world using any
          payment method.
        </Box>
        <Button
          variant="contained"
         
          sx={{
            background: "#A29BFF 0% 0% no-repeat padding-box",
            borderRadius: "23px",
            width: "94px",
            height: "46px",
            font: {sm:"normal normal 600 21px/22px Montserrat,sans-serif",xs:"normal normal 600 18px Montserrat,sans-serif"},
            color: "#08061C",
            marginTop: "27px",
            width: "190px",
            textTransform: "unset",
            marginLeft: "2px",
            "&:hover": {
              transform: "scale(1.5,1.1)",
              width:"normal normal 600 19px/23px Montserrat",
              // width:"300px",
              background: "#A29BFF 0% 0% no-repeat padding-box",
            },
          }}
        >
          Trade now
          {/* <Box component="span" sx={{width:"20px",height:"20px"}}><ArrowForwardIcon/></Box> */}

        </Button>
      </Box>
      <Box
        sx={{
          height: {md:"819px",sm:"580px"},
          backgroundImage: `url(${stripeImg})`,
          backgroundPosition:{xs:"center"},
           marginTop: {xs:"100px",sm:"unset"},
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "100%",
            background: {md:`transparent url(${centerImg}) no-repeat right 50% top 2px`,xs:`transparent url(${centerImgMobile}) no-repeat right 50% top 2px`},
            backgroundSize:{sm:"85%",md:"70%",lg:"contain",xs:"contain"},
            opacity: "1",
            height: {sm:"846px",xs:"310px"},
            width: {lg:"972px",md:"850px",sm:"580px",xs:"330px"}
          }}
        >
          <Box
            sx={{
              backgroundImage: {xs:`url(${BuySell2})`},
              opacity: "1",
              height: {md:"369px",sm:"300px"},
              minWidth: {md:"307px",sm:"245px"},
              zIndex: "5",
              marginLeft: {lg:"12%",md:"4%"},
              marginTop: "210px",
              backgroundSize:"contain",
              // display:{xs:"none",md:"unset"}
            }}
          ></Box>

          <Box
            sx={{
              backgroundImage: {xs:`url(${BuyWeth2})`},
              opacity: "1",
              height: {md:"409px",sm:"300px"},
              width: {md:"520px",sm:"375px"},
              zIndex: "5",
              marginRight: {lg:"6.5%",sm:"4%"},
              backgroundSize:"contain",

            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderSection;
