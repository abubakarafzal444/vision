import { Drawer, IconButton } from "@mui/material";
import React from "react";
import Cross from "assets/Cross.svg";
import Discord from "assets/DiscordWhite.svg";
import Twitter from "assets/TwitterWhite.svg";
import { Box } from "@mui/system";
import { Link } from "react-scroll";
import styled from "@emotion/styled";

const StyledMenuButton = styled('p')({
  fontSize: "16px",
  fontWeight: "600",
  borderBottom: "1px solid #575DA6",
  paddingBottom: "12.5px",
  marginBottom: "37.5px",
  marginRight: "50px",
  cursor: "pointer",
});

const NavDrawer = ({ closeFunc, open }) => {
  return (
    <Drawer
    className="modal"
    variant="persistent"
    transitionDuration={500}
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
                fontSize: {
                  sm: "30px",
                  xs: "26px",
                },
                fontWeight: "600",
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
        <Box className="drawer-gradient" sx={{position:"absolute",maxWidth:"100vw",maxHeight:"100vh",minWidth:"100vw",minHeight:"100vh"}}></Box>
        <Box sx={{ marginY: "164px", marginLeft: "38px",position:"relative",zIndex:"3"}}>
        <Link activeClass="active" offset={-50} smooth spy to="feature-section">
          <StyledMenuButton
            component="p"
            onClick={() => closeFunc()}
          >
            Features
          </StyledMenuButton>
          </Link>
          <Link activeClass="active" smooth spy offset={150} to="how-it-works-section">

          <StyledMenuButton
            component="p"
            onClick={() => closeFunc()}
          >
            How does it work
          </StyledMenuButton>
          </Link>
          <Link activeClass="active" smooth spy to="join-us-section">
          <StyledMenuButton
            component="p"
            onClick={() => closeFunc()}
          >
            Join us
          </StyledMenuButton>
          </Link>

        </Box>
      
        <Box sx={{ display: "flex", justifyContent: "center",position:"relative",zIndex:"3" }}>
          <Box
            component="img"
            src={Discord}
            sx={{
              width: "38px",
              height: "33px",
              marginRight: "42px",
              cursor: "pointer",
            }}
          ></Box>
          <Box
            component="img"
            src={Twitter}
            sx={{
              width: "40px",
              height: "31px",
              cursor: "pointer",
            }}
          ></Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default NavDrawer;
