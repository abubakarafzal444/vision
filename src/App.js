import "./App.css";
import LandingPage from "pages/LandingPage/LandingPage";
import { Box } from "@mui/material";
import lgBackground from "assets/BG.png";
import smBackground from "assets/BG@2x.png";
import { useState } from "react";
import Navbar from "components/Navbar";
function App() {
  const [scrollAllowed, setScrollAllowed] = useState(true);
  const allowScroll = () => setScrollAllowed(true);
  const disallowScroll = () => setScrollAllowed(false);
  return (
    <Box
      sx={{
        backgroundImage: {
          sm: `url(${lgBackground})`,
          xs: `url(${smBackground})`,
        },
        backgroundSize: "cover",
        position: !scrollAllowed && "static",
        left: !scrollAllowed && "0",
        right: !scrollAllowed && "0",
        top: !scrollAllowed && "0",
        bottom: !scrollAllowed && "0",
        height: !scrollAllowed && "100vh",
        overflow: !scrollAllowed && "hidden",
      }}
    >
      <Navbar
        allowScroll={allowScroll}
        disallowScroll={disallowScroll}
      />
      <LandingPage />
    </Box>
  );
}

export default App;
