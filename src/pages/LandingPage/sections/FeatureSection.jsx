import { Box, Grid } from "@mui/material";
import FeatureComponent from "components/FeatureComponent";
import React from "react";
import key from "assets/key.svg";
import lock from "assets/lock.svg";
import decentralized from "assets/decentralized.svg";
import Anonymous from "assets/Anonymous.svg";
import ui from "assets/UI.svg";
import manymany from "assets/manymany.svg";
import chain from "assets/chain.svg";
import chart from "assets/chart.svg";

const featureArray = [
  {
    icon: key,
    heading: "Private",
    description:
      "PROJECT_NAME does not collect or store any of your personal data. Just connect your wallet and start trading",
    link: "",
    animate: true,
  },
  {
    icon: lock,
    heading: "Safe",
    description:
      "The collateral mechanism is designed in a way to only make it viable for honest traders to use our platform",
    link: "learn more about collateral",
    animate: true,
  },
  {
    icon: decentralized,
    heading: "Decentralized",
    description:
      "PROJECT_NAME is powered by smart contracts and does not need any centralized authority",
    link: "gitbook",
    animate: true,
  },
  {
    icon: Anonymous,
    heading: "Anonymous",
    description:
      "We do not require any identity verification. Get started right away from anywhere in the world",
    link: "",
    animate: true,
  },
  {
    icon: ui,
    heading: "Simple and intuitive UI",
    description:
      "We have designed the UI to be simple and familiar. P2P trading has never been easier",
    link: "",
    animate: false,
  },
  {
    icon: manymany,
    heading: "Many currencies supported",
    description:
      "Support for all the most popular fiat currencies and cryptocurrencies",
    link: "Multichain",
    animate: false,
  },
  {
    icon: chain,
    heading: "Multichain",
    description:
      "PROJECT_NAME is currently active on Ethereum, Binance Smart Chain and Aurora",
    link: "none",
    animate: false,
  },
  {
    icon: chart,
    heading: "No trading limits",
    description:
      "There are no limits or restrictions on how much you can trade as long as you have the required collateral",
    link: "",
    animate: false,
  },
];

const FeatureSection = () => {
  return (
    <>
      <Box
        sx={{
          width: {sm:"240px"},
          height: {sm:"240px",xs:"170px"},
           marginLeft: { lg: "40px", sm: "20px", xs: "10px",md:"50px",xl:"180px" },
           display:"flex",
           justifyContent:"center",
           marginTop:{sm:"100px",md:"0px",xs:"75px"},

      
        }}
      >

<Box sx={{ position: "relative" }}>
              <Box className="circle-parent features-h1"></Box>
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
                  color:"#A29BFF"
                }}
              >
              Features!
              </Box>
            </Box>

      </Box>

      <Box
        sx={{ flexGrow: 1, marginX: { lg: "40px", sm: "20px", xs: "10px",md:"50px",xl:"180px" },position: "relative",bottom:{sm:"40px",xs:"100px",md:"20px"} }}
      >
        <Grid container spacing={3} >
          {featureArray.slice(0, 4).map((feature, index) => (
            <Grid key={index} item xs={12} sm={6} md={6} lg={3} sx={{display:"flex",justifyContent:"center"}}>
              <FeatureComponent
                isKey={index === 0 && true}
                icon={feature.icon}
                heading={feature.heading}
                description={feature.description}
                link={feature.link}
                animate={feature.animate}
              />
            </Grid>
          ))}
            </Grid>
            <Grid container spacing={3}>
          {featureArray.slice(4, 8).map((feature, index) => (
            <Grid key={index} item xs={12} sm={6} md={6} lg={3}  sx={{display:"flex",justifyContent:"center"}}>
              <FeatureComponent
                isKey={index === 0 && true}
                icon={feature.icon}
                heading={feature.heading}
                description={feature.description}
                link={feature.link}
                animate={feature.animate}
              />
            </Grid>
          ))}
            </Grid>
      
      </Box>
    </>
  );
};

export default FeatureSection;
