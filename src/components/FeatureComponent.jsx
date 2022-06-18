import { Box } from "@mui/system";
import React from "react";

const FeatureComponent = ({
  isKey,
  icon,
  heading,
  description,
  link,
  animate,
}) => {
  const [showCircle,setShowCircle]=React.useState(false);
  return (
    <Box onMouseEnter={()=>setShowCircle(true)} onMouseLeave={()=>setShowCircle(false)} sx={{ width: {sm:"280px",xs:"320"}, height: {sm:"222px",xs:"210px"}, marginBottom: {sm:"110px",xs:"60px" },
    marginX: {sm:"unset",xs:"35px" },
    position:"relative"
    }}>
      {animate&&<Box className="feature-gradient"sx={{opacity:{md:showCircle?"1":"0",xs:"0"}}}></Box>}
      <Box
        sx={{
          width: "55px",
          height: "55px",
          transform: isKey && "rotate(360deg)",
          background: `url(${icon}) no-repeat padding-box`,
          position:"relative",
          zIndex:"3"
        }}
      ></Box>

      <Box
        component="h6"
        py={3}
        sx={{
          font: {sm:"normal normal 600 28px/33px Montserrat,sans-serif;",xs:"normal normal 600 27px Montserrat,sans-serif;"},
          width: "80%",
          position:"relative",
          zIndex:"3"
        }}
      >
        {heading}
      </Box>
      <Box
        component="p"
        sx={{
          color: "#E4E6FD",
          font: {sm:"normal normal 300 16px/25px Montserrat,sans-serif;",xs:"normal normal 300 16px Montserrat,sans-serif;"},
          position:"relative",
          zIndex:"3"
        }}
      >
        {description}
      </Box>
      {link && (
        <Box
          component="p"
          sx={{
            textDecoration: "underline",
            font: {sm:"normal normal 600 16px/19px Montserrat,sans-serif",xs:"normal normal 600 16px Montserrat,sans-serif"},
            color: "#A29BFF",
            position:"relative",
            zIndex:"3"
          }}
        >
          {link}
        </Box>
      )}
    </Box>
  );
};

export default FeatureComponent;
