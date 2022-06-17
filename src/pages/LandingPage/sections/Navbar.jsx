import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} color="transparent">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ marginLeft: "7.3%", marginTop: "27px" }}>
            <Box
              sx={{
                font: "normal normal 600 30px/37px Montserrat,sans-serif",
                color: "#E4E6FD",
              }}
              component="h2"
            >
              LOGOTYPE
            </Box>
            <Box
              sx={{
                color: "#C4C4C4",
                lineHeight: "0.5",
              }}
              component="p"
            >
              lorem ipsum dolor
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginRight: "9.5%",
              width: "401px",
              justifyContent: "space-between",
              marginTop: "51px",
            }}
          >
            <Box
              component="p"
              sx={{
                font: "normal normal bold 19px/19px Montserrat,sans-serif",
                borderBottom: "3px solid #A29BFF",
                paddingBottom: "7px",

                "&:hover": {
                  color: "#A29BFF",
                },
              }}
            >
              Features
            </Box>
            <Box
              component="p"
              sx={{
                font: "normal normal bold 19px/19px Montserrat,sans-serif",
                borderBottom: "3px solid #A29BFF",
                paddingBottom: "7px",
                "&:hover": {
                  color: "#A29BFF",
                },
              }}
            >
              How does it work
            </Box>
            <Box
              component="p"
              sx={{
                font: "normal normal bold 19px/19px Montserrat,sans-serif",
                borderBottom: "3px solid #A29BFF",
                paddingBottom: "7px",
                "&:hover": {
                  color: "#A29BFF",
                },
              }}
            >
              Join us
            </Box>
          </Box>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
        </Box>
      </AppBar>
    </Box>
  );
}
