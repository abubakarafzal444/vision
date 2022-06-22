import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "assets/Arrowbutton.svg";
import stripeImg from "assets/Abstractstripes.svg";
// import BuySell2 from "assets/Buysell2.png";
import centerImg from "assets/23123.png";
import centerImgMobile from "assets/23123@2x.png";
// import BuyWeth2 from "assets/BuyWETH2.png";
import BuySell2 from "assets/Buysell1.svg";
import BuyWeth2 from "assets/BuyWith1.svg";
const HeaderSection = () => {
  return (
    <Box
      id="header-section"
      component="header"
      sx={{
        // backgroundImage: `url(${stripeImg})`,
        backgroundPosition: { xs: "center" },
        backgroundSize: { xs: "cover" },
      }}
    >
      <Box sx={{ maxWidth: "1920px", marginX: "auto" }}>
        <Box
          sx={{
            display: { sm: "unset", xs: "flex" },
            flexDirection: "column-reverse",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              zIndex: "7",
            }}
          >
            <Box
              className="header-gradient"
              sx={{ display: { sm: "none" }, left: "20px" }}
            ></Box>
            <Box
              component="h1"
              sx={{
                position: "relative",
                zIndex: "6",
                fontSize: {
                  lg: "94px",
                  sm: "65px",
                  xs: "40px",
                },
                fontWeight: "bold",
                marginTop: { sm: "130px", xs: "90px" },
                textAlign: "center",
                width: { md: "100%", sm: "85%", xs: "88%" },
              }}
            >
              <Box component="span" sx={{ color: "#E4E6FD" }}>
                Cut Out <Box component="br" sx={{ display: { md: "none" } }} />
                the
              </Box>
              <Box component="span" sx={{ color: "#A29BFF" }}>
                {" "}
                Middleman
              </Box>
            </Box>
            <Box
              component="h2"
              sx={{
                fontSize: {
                  sm: "18px",
                  xs: "16px",
                },
                fontWeight: "300",
                position: "relative",
                zIndex: "6",
                marginTop: "10px",
                color: "#F5F5F5",
                textAlign: "center",
                width: { md: "80%", xs: "88%" },
                lineHeight: { sm: "unset", xs: "1.7" },
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
                width: { sm: "194px", xs: "318px" },
                height: "46px",
                marginBottom: "4px",
                marginTop: "27px",
                textTransform: "unset",
                padding: "0",
                display: "flex",
                transition: "all 0.3s ease-out;",

                justifyContent: "space-between",
                paddingLeft: { sm: "35px", xs: "105px" },
                paddingRight: { sm: "40px", xs: "104px" },
                "&:hover": {
                  width: "296px",
                  height: "50px",
                  marginBottom: "0px",
                  background: "#A29BFF 0% 0% no-repeat padding-box",
                  paddingLeft: { sm: "85px", xs: "100px" },
                  paddingRight: "15px",
                  fontSize: "19px !important",
                  transition: "all 0.3s ease-out;",
                },
              }}
            >
              <Box
                sx={{
                  fontSize: {
                    sm: "21px",
                    xs: "18px",
                  },
                  fontWeight: "600",
                  color: "#08061C",
                  position: "relative",
                  zIndex: "8",
                }}
              >
                Trade now
              </Box>
              <Box
                sx={{
                  width: "4.33px",
                  height: "8.6px",
                  marginLeft: "7px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",

                  backgroundImage: `url(${ArrowForwardIcon}) `,
                }}
              ></Box>
            </Button>
          </Box>
          <Box
            sx={{
              height: { md: "819px", sm: "580px" },
              backgroundImage: `url(${stripeImg})`,
              backgroundPosition: { sm: "right 31% top 50%", xs: "right 50% top 50%" },
              backgroundSize: { sm: "unset", xs: "cover" },
              marginTop: { xs: "45px", sm: "unset" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                minWidth: "100%",
                background: {
                  md: `transparent url(${centerImg}) no-repeat right 50% top 2px`,
                  xs: `transparent url(${centerImgMobile}) no-repeat right 50% top 2px`,
                },
                backgroundSize: {
                  sm: "85%",
                  md: "70%",
                  lg: "contain",
                  xs: "contain",
                },
                opacity: "1",
                height: { sm: "846px", xs: "310px" },
                width: { lg: "972px", md: "850px", sm: "580px", xs: "330px" },
              }}
            >
              <Box
                sx={{
                  marginLeft: { lg: "12%", md: "4%" },
                  marginTop: "255px",
                  position: "relative",
                  zIndex: "7",
                }}
              >
                <Box className="img-gradient" sx={{ left: "-27px",top:"-31px",width:"100px",height:"100px",display:{xs:"none",sm:"unset"} }}></Box>
                <Box
                  sx={{
                    backgroundImage: { xs: `url(${BuySell2})` },
                    backgroundRepeat: "no-repeat",
                    opacity: "1",
                    height: { md: "369px", sm: "300px" },
                    minWidth: { md: "307px", sm: "245px" },
                    zIndex: "8",
                    position: "relative",
                    backgroundSize: "contain",
                    // display:{xs:"none",md:"unset"}
                  }}
                ></Box>
              </Box>
              <Box sx={{  marginRight: { lg: "6.5%", sm: "4%" },position:"relative",marginTop:"60px"}}>
              <Box className="img-gradient" sx={{ left: "-60px",top:"-50px",width:"150px",height:"150px",display:{xs:"none",sm:"unset"} }}></Box>
              <Box
                sx={{
                  backgroundImage: { xs: `url(${BuyWeth2})` },
                  backgroundRepeat: "no-repeat",
                  opacity: "1",
                  height: { md: "409px", sm: "300px" },
                  width: { md: "520px", sm: "375px" },
                  zIndex: "5",
                  position:"relative",
                  backgroundSize: "contain",
                }}
              ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderSection;
