import { Box } from '@mui/system'
import React from 'react'
import Navbar from 'pages/LandingPage/sections/Navbar'
import FeatureSection from 'pages/LandingPage/sections/FeatureSection'
import HeaderSection from 'pages/LandingPage/sections/HeaderSection'
import HowItWorksSection from 'pages/LandingPage/sections/HowItWorksSection'
import JoinUsSection from './sections/JoinUsSection'

const LandingPage = () => {
  return (
<Box className="page-bg" >
  <Navbar/>
  <HeaderSection/>
  <FeatureSection/>
  <HowItWorksSection/>
  <JoinUsSection/>
</Box>)
}

export default LandingPage