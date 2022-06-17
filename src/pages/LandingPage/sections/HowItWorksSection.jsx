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
                minWidth: "400px",
                height: "300px",
                background: `transparent url(${BuyWith1}) 0% 0% no-repeat padding-box;`,
                marginTop: "220px",
              }}
            ></Box>
            <Box
              sx={{
                minWidth: "270px",
                height: "326px",
                background: `transparent url(${BuySell1}) 0% 0% no-repeat padding-box`,
                marginTop: "10px",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              marginLeft: { lg: "10vw" },
              marginTop: "80px",
              maxWidth: "630px",
            }}
          >
            <Box
              component="h2"
              sx={{
                font: "normal normal 600 45px/55px Montserrat,sans-serif",
                marginBottom: "77px",
              }}
            >
              How does it{" "}
              <Box component="span" sx={{ color: "#A29BFF" }}>
                work?
              </Box>
            </Box>

            <Box class="list-wrapper">
              <Box class="red-line"></Box>
              <Box class="list-item-wrapper">
                <Box class="list-bullet">
                  <Box component="span" className="li-no-span">
                    1
                  </Box>
                </Box>
                <Box class="list-item">
                  <Box class="list-text">Connect your wallet</Box>
                </Box>
              </Box>
              <Box class="list-item-wrapper">
                <Box class="list-bullet">
                  <Box component="span" className="li-no-span">
                    2
                  </Box>
                </Box>
                <Box class="list-item">
                  <Box class="list-text">Find or create a new offer</Box>
                </Box>
              </Box>
              <Box class="list-item-wrapper">
                <Box class="list-bullet">
                  <Box component="span" className="li-no-span">
                    3
                  </Box>
                </Box>
                <Box class="list-item">
                  <Box class="list-text">
                    {" "}
                    Deposit enough collateral required for the deal you are
                    interested in
                  </Box>
                </Box>
              </Box>
              <Box class="list-item-wrapper">
                <Box class="list-bullet">
                  <Box component="span" className="li-no-span">
                    4
                  </Box>
                </Box>
                <Box class="list-item">
                  <Box class="list-text">Trade!</Box>
                  <div class="white-line"></div>
                </Box>
              </Box>
            </Box>
            <Button variant="outlined" sx={{width:"170px",height:"50px",border:"1px solid #A29BFF",borderRadius:"145px",font:" normal normal 600 20px/25px Montserrat,sans-serif",marginTop:"65px",marginLeft:"-50px"}}>Start now</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
