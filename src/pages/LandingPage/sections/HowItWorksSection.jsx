import { Box } from "@mui/system";
import React from "react";
import BuySell1 from "assets/Buysell1.png";
import BuyWith1 from "assets/BuyWith1.png";
import stripeImg from "assets/Abstractstripes.svg";
import { Button } from "@mui/material";

const HowItWorksSection = () => {
  return (
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: { xs: "70px", sm: "unset" },
          marginX: {
            md: "20px",
            sm: "20px",
            xs: "10px",
            lg: "70px",
            xl: "140px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            // flexDirection: "column",
            justifyContent: { xs: "center", md: "unset" },
            // width:"100%"
          }}
        >
          <Box
            sx={{
              display: "flex",
              background: `transparent url(${stripeImg}) 0% 0% no-repeat`,
              backgroundSize: "cover",
            }}
          >
            <Box
              mr={3}
              sx={{
                minWidth: { lg: "400px", md: "300px", xs: "320px" },
                height: { lg: "300px", xs: "240px" },
                marginX: { md: "unset", xs: "auto" },
                marginRight: { md: "20px" },
                background: `transparent url(${BuyWith1}) 0% 0% no-repeat padding-box;`,
                backgroundSize: "contain",
                marginTop: { md: "220px" },
                backgroundPosition: { md: "unset", xs: "center" },
                marginBottom: { md: "unset", xs: "70px" },
              }}
            ></Box>
            <Box
              sx={{
                minWidth: { lg: "270px", sm: "200px" },
                height: { lg: "326px", sm: "275px" },
                background: `url(${BuySell1}) 0% 0% no-repeat padding-box`,
                backgroundSize: "contain",
                marginTop: "10px",
                display: { xs: "none", md: "block" },
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              marginLeft: { lg: "10vw", xs: "37px" },
              marginRight: { sm: "unset", xs: "37px" },

              marginTop: "80px",
              maxWidth: "630px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Box className="circle-parent"></Box>
              <Box className="circle-child"></Box>
              <Box
                component="h2"
                sx={{
                  font: {
                    sm: "normal normal 600 45px/55px Montserrat,sans-serif",
                    xs: "normal normal 600 30px Montserrat,sans-serif",
                  },
                  marginBottom: { sm: "77px", xs: "70px" },
                  position: "relative",
                  zIndex: "6",
                }}
              >
                How does it{" "}
                <Box component="span" sx={{ color: "#A29BFF" }}>
                  work?
                </Box>
              </Box>
            </Box>

            <Box className="list-wrapper">
              <Box className="purple-line"></Box>
              <Box className="list-item-wrapper">
                <Box className="list-bullet">
                  <Box component="span" className="li-no-span">
                    1
                  </Box>
                </Box>
                <Box className="list-item">
                  <Box className="list-text">Connect your wallet</Box>
                </Box>
              </Box>
              <Box className="list-item-wrapper">
                <Box className="list-bullet">
                  <Box component="span" className="li-no-span">
                    2
                  </Box>
                </Box>
                <Box className="list-item">
                  <Box className="list-text">Find or create a new offer</Box>
                </Box>
              </Box>
              <Box className="list-item-wrapper">
                <Box className="list-bullet">
                  <Box component="span" className="li-no-span">
                    3
                  </Box>
                </Box>
                <Box className="list-item">
                  <Box className="list-text">
                    {" "}
                    Deposit enough collateral required for the deal you are
                    interested in
                  </Box>
                </Box>
              </Box>
              <Box className="list-item-wrapper">
                <Box className="list-bullet">
                  <Box component="span" className="li-no-span">
                    4
                  </Box>
                </Box>
                <Box className="list-item">
                  <Box className="list-text">Trade!</Box>
                  <div className="white-line"></div>
                </Box>
              </Box>
            </Box>
            {/* <Button
              
              variant="outlined"
              sx={{
                maxWidth:"170px",
                height: "60px",
                paddingX:"25px",
                left:"50px",
                border: "1px solid #A29BFF",
                borderRadius: "145px",
                font: {
                  sm: "normal normal 600 18px/25px Montserrat,sans-serif",
                  xs: "normal normal 600 20px Montserrat,sans-serif",
                },
                marginTop: { sm: "65px", xs: "40px" },
                marginLeft: "-50px",
    

                "&:hover": {
                  // width:"220px",height:"54px",
                  // marginBottom:"6px"
                  // transform: "scaleX(1.15)",
                  paddingX:"35px",

                  maxWidth:"200px",
                },
                
              }}
            >
              Start now
            </Button> */}
             <Button
              
              variant="outlined"
              sx={{
                maxWidth:{sm:"170px",xs:"100%"},
                minWidth:{xs:"100%",sm:"unset"},
                height: "60px",
                paddingX:"25px",
                left:"50px",
                border: "1px solid #A29BFF",
                borderRadius: "145px",
                font: {
                  sm: "normal normal 600 18px/25px Montserrat,sans-serif",
                  xs: "normal normal 600 20px Montserrat,sans-serif",
                },
                marginTop: { sm: "65px", xs: "40px" },
                marginLeft: "-100px",
                "&:hover": {
                   transform: {sm:"scaleX(1.15)"}, 
                   maxWidth:{sm:"170px",xs:"200px"},
                   minWidth:{xs:"200px",sm:"unset"},
                   transition:"all 0.3s ease-out;",
                   background: "#A29BFF 0% 0% no-repeat padding-box;",
                   boxShadow:"0px 3px 30px #00DCFF7D;",
                   border:"1px solid #A29BFF",
                   color:"#0e0c29"
                },
                
              }}
            >
              Start now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
