import "./App.css";
import LandingPage from "pages/LandingPage/LandingPage";
import { Box } from "@mui/material";
import lgBackground from "assets/BG.png";
import smBackground from "assets/BG@2x.png";
import Navbar from "components/Navbar";
function App() {

  return (
    <Box

    >
      <Navbar

      />
      <LandingPage />
    </Box>
  );
}

export default App;
