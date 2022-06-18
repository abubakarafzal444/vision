import { Box } from "@mui/system";
import React from "react";
import Navbar from "pages/LandingPage/sections/Navbar";
import FeatureSection from "pages/LandingPage/sections/FeatureSection";
import HeaderSection from "pages/LandingPage/sections/HeaderSection";
import HowItWorksSection from "pages/LandingPage/sections/HowItWorksSection";
import JoinUsSection from "pages/LandingPage/sections/JoinUsSection";
import lgBackground from "assets/BG.png";
import smBackground from "assets/BG@2x.png";


const LandingPage = () => {
  return (
    <Box sx={{background:{sm:`transparent url(${lgBackground}) 0% 0% no-repeat padding-box;`,xs:`transparent url(${smBackground}) 0% 0% no-repeat padding-box;`},backgroundSize:"cover"}}>
      <Navbar />
      <HeaderSection />
      <FeatureSection />
      <HowItWorksSection />
      <JoinUsSection />
    </Box>
  );
};

export default LandingPage;
