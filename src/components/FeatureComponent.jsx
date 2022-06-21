import { Box } from "@mui/system";
import React from "react";

const FeatureComponent = ({ isKey, icon, heading, description, link }) => {
  const [showCircle, setShowCircle] = React.useState(false);
  return (
    <Box
      onMouseEnter={() => setShowCircle(true)}
      onMouseLeave={() => setShowCircle(false)}
      sx={{
        width: { sm: "280px", xs: "320" },
        height: { sm: "222px", xs: "210px" },
        marginBottom: { sm: "110px", xs: "60px" },
        marginX: { sm: "unset", xs: "35px" },
        position: "relative",
      }}
    >
      {
        <Box
          className="feature-gradient"
          sx={{ opacity: { md: showCircle ? "1" : "0", xs: "0" } }}
        ></Box>
      }
      <Box
        sx={{
          width: "55px",
          height: "55px",
          transform: isKey && "rotate(360deg)",
          background: `url(${icon}) no-repeat padding-box`,
          position: "relative",
          zIndex: "3",
        }}
      ></Box>

      <Box
        component="h6"
        py={3}
        sx={{
          fontSize: { sm: "28px", xs: "27px" },
          fontWeight: "600",
          width: "80%",
          position: "relative",
          zIndex: "3",
        }}
      >
        {heading}
      </Box>
      <Box
        component="p"
        sx={{
          color: "#E4E6FD",
          fontSize: "16px",
          fontWeight: "300",
          position: "relative",
          zIndex: "3",
        }}
      >
        {description}
      </Box>
      {link && (
        <Box
          component="p"
          sx={{
            textDecoration: "underline",
            fontSize: "16px",
            fontWeight: "600",
            color: "#A29BFF",
            position: "relative",
            zIndex: "3",
          }}
        >
          {link}
        </Box>
      )}
    </Box>
  );
};

export default FeatureComponent;
