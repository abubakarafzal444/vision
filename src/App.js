import './App.css';
import LandingPage from 'pages/LandingPage/LandingPage';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="App">
      <Box sx={{width:"100%",maxWidth:"1920px"}}>
      <LandingPage/>
      </Box>
    </Box>
  );
}

export default App;
