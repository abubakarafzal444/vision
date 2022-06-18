import './App.css';
import LandingPage from 'pages/LandingPage/LandingPage';
import { Box } from '@mui/material';
import lgBackground from "assets/BG.png";
import smBackground from "assets/BG@2x.png";

function App() {
  return (
    <Box  sx={{backgroundImage:{sm:`url(${lgBackground})`,xs:`url(${smBackground})`},backgroundSize:"cover"}}>
      <LandingPage/>
    </Box>
  );
}

export default App;
