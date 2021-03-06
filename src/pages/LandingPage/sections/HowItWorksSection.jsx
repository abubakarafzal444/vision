import { Box } from "@mui/system";
import React from "react";
import BuySell1 from "assets/Buysell1.svg";
import BuyWith1 from "assets/BuyWith1.svg";
import stripeImg from "assets/AbstractstripesHowWorks.svg";
import { Button } from "@mui/material";

const HowItWorksSection = () => {
  return (
    <Box
      id="how-it-works-section"
      component="section"
      sx={{ maxWidth: "1920px", marginX: "auto" }}
    >
      <Box
        sx={{
          position: "relative",
          bottom: { sm: "40px", xs: "100px", md: "20px" },
          marginTop: { sm: "100px" },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            marginTop: { xs: "40px", sm: "unset" },
            marginRight: {
              md: "20px",
              sm: "20px",
              xs: "0px",
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
                backgroundImage: `url(${stripeImg})`,
                backgroundPosition:{xs:"right 50% top 0px",sm:"right 17% top -8px",md:"right 12% top 42px"},
                backgroundRepeat:"no-repeat",
                backgroundSize: "cover",
                paddingLeft:{ md: "20px",
                sm: "20px",
                xs: "10px",
                lg: "70px",
                xl: "140px",}
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
                  backgroundPosition: { md: "unset", xs: "center" },
                  marginBottom: { md: "unset", xs: "45px" },
                  marginTop: { md: "220px", xs: "25px" },

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
                    fontSize: {
                      sm: "45px",
                      xs: "30px",
                    },
                    fontWeight: "600",
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

              <Box
                className="list-wrapper"
                sx={{ position: "relative", zIndex: "7" }}
              >
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
              <Button
                variant="outlined"
                sx={{
                  height: "60px",
                  paddingX: "25px",
                  left: "50px",
                  border: "1px solid #A29BFF",
                  borderRadius: "145px",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: { sm: "65px", xs: "40px" },
                  marginLeft: "-100px",
                  transition: "all 0.3s ease-out;",
                  "&:hover": {
                    transform: { sm: "scaleX(1.15)" },
                    minWidth: { xs: "200px", sm: "unset" },
                    background: "#A29BFF 0% 0% no-repeat padding-box;",
                    boxShadow: {sm:"0px 3px 30px #00DCFF7D;"},
                    border: "1px solid #A29BFF",
                    color: "#0e0c29",
                    transition: "all 0.4s ease-out;",
                  },
                }}
              >
                Start now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
