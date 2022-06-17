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
  return (
    <Box sx={{ width: "280px", height: "222px",marginBottom:"110px" }}>
      <Box
        sx={{
          width: "55px",
          height: "55px",
          transform: isKey && "rotate(360deg)",
          background: `url(${icon}) no-repeat padding-box`,
        }}
      ></Box>

      <Box
        component="h6"
        py={3}
        sx={{ font: "normal normal 600 28px/33px Montserrat,sans-serif;",width:"80%"}}
      >
        {heading}
      </Box>
      <Box
        component="p"
        sx={{
          color: "#E4E6FD",
          font: "normal normal 300 16px/25px Montserrat,sans-serif;",
        }}
      >
        {description}
      </Box>
      {link && (
        <Box
          component="p"
          sx={{
            textDecoration: "underline",
            font: "normal normal 600 16px/19px Montserrat,sans-serif",
            color: "#A29BFF",
          }}
        >
          {link}
        </Box>
      )}
    </Box>
  );
};

export default FeatureComponent;
