import { Drawer, IconButton } from "@mui/material";
import React from "react";
import Cross from "assets/Cross.svg";
import Discord from "assets/DiscordWhite.svg";
import Twitter from "assets/TwitterWhite.svg";
import { Box } from "@mui/system";

const NavDrawer = ({ closeFunc, open }) => {
  return (
    <Drawer
    variant="persistent"
    transitionDuration={300}
      anchor={"right"}
      PaperProps={{
        sx: { width: "100%", opacity: "0.9", backgroundColor: "#010017",overflow: "hidden" },
      }}
      open={open}
      onClose={() => closeFunc()}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{ marginLeft: "7.3%", marginTop: { md: "27px", xs: "12px" } }}
          >
            <Box
              sx={{
                font: {
                  sm: "normal normal 600 30px/37px Montserrat,sans-serif",
                  xs: "normal normal 600 26 Montserrat,sans-serif",
                },
                color: "#E4E6FD",
                cursor: "pointer",
              }}
              component="h2"
            >
              LOGOTYPE
            </Box>
            <Box
              sx={{
                color: "#C4C4C4",
                lineHeight: "0.5",
                fontSize: "11px",
              }}
              component="p"
            >
              lorem ipsum dolor
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              marginRight: "15px",
              marginTop: "6px",
              
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => closeFunc()}
            >
              <Box
                sx={{
                  width: "28px",
                  height: "20px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${Cross}) `,
                  
                }}
              ></Box>
            </IconButton>
          </Box>
        </Box>
        <Box className="drawer-gradient" sx={{position:"absolute",top:"0",right:"0",bottom:"0",left:"0"}}></Box>
        <Box sx={{ marginY: "164px", marginLeft: "38px",position:"relative",zIndex:"3"}}>
          <Box
            component="p"
            sx={{
              font: "normal normal 600 16px Montserrat,sans-serif",
              borderBottom: "1px solid #575DA6",
              paddingBottom: "12.5px",
              marginBottom: "37.5px",
              marginRight: "50px",
              cursor: "pointer",
            }}
          >
            Features
          </Box>
          <Box
            component="p"
            sx={{
              font: "normal normal 600 16px Montserrat,sans-serif",
              borderBottom: "1px solid #575DA6",
              paddingBottom: "12.5px",
              marginBottom: "37.5px",
              marginRight: "50px",
              cursor: "pointer",
            }}
          >
            How does it work
          </Box>
          <Box
            component="p"
            sx={{
              font: "normal normal 600 16px Montserrat,sans-serif",
              borderBottom: "1px solid #575DA6",
              paddingBottom: "12.5px",
              marginBottom: "37.5px",
              marginRight: "50px",
              cursor: "pointer",
            }}
          >
            Join us
          </Box>

        </Box>
      
        <Box sx={{ display: "flex", justifyContent: "center",position:"relative",zIndex:"3" }}>
          <Box
            component="span"
            sx={{
              width: "38px",
              height: "33px",
              marginRight: "42px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${Discord}) `,
              cursor: "pointer",
            }}
          ></Box>
          <Box
            component="span"
            sx={{
              width: "40px",
              height: "31px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${Twitter}) `,
              cursor: "pointer",
            }}
          ></Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default NavDrawer;
