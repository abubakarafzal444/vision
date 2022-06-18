import { Box } from "@mui/system";
import React from "react";
import FeatureSection from "pages/LandingPage/sections/FeatureSection";
import HeaderSection from "pages/LandingPage/sections/HeaderSection";
import HowItWorksSection from "pages/LandingPage/sections/HowItWorksSection";
import JoinUsSection from "pages/LandingPage/sections/JoinUsSection";



const LandingPage = () => {
  return (
    <Box sx={{maxWidth:"1920px",marginX:"auto"}}>
   
      <HeaderSection />
      <FeatureSection />
      <HowItWorksSection />
      <JoinUsSection />
    </Box>
  );
};

export default LandingPage;
