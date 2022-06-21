import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import HamburgerIcon from "assets/Hamburger1.svg";
import NavDrawer from "components/NavDrawer";
import { Link } from "react-scroll";
import styled from "@emotion/styled";

const StyledMenuButton = styled('p')({
  fontSize: "19px",
  fontWeight: "bold",
  borderBottom: "3px solid #A29BFF",
  paddingBottom: "7px",
  cursor: "pointer",
  "&:hover": {
    color: "#A29BFF",
  },
});

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const openDrawerHandler = () => {
    setOpenDrawer(true);
  };
  const closeDrawerHandler = () => {
    setOpenDrawer(false);
  };
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "1920px", marginX: "auto" }}>
      <AppBar position="static" elevation={0} color="transparent">
        <Box sx={{ display: "flex", justifyContent: "space-between",paddingBottom:"5px" }}>
          <Box
            sx={{ marginLeft: "7.3%", marginTop: { md: "27px", xs: "12px" } }}
          >
            <Box
              sx={{
                fontSize: {
                  sm: "30px",
                  xs: "26px",
                  fontWeight: "600",
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
              display: { xs: "none", md: "flex" },
              marginRight: "9.5%",
              width: "401px",
              justifyContent: "space-between",
              marginTop: "51px",
            }}
          >
            <Link activeClass="active" offset={-100} smooth spy to="feature-section">
              <StyledMenuButton
                component="p"
              >
                Features
              </StyledMenuButton>
            </Link>
            <Link activeClass="active" offset={-230} smooth spy to="how-it-works-section">
              <StyledMenuButton
                component="p"
              >
                How does it work
              </StyledMenuButton>
            </Link>
            <Link activeClass="active" smooth spy to="join-us-section">
              <StyledMenuButton
                component="p"
              >
                Join us
              </StyledMenuButton>
            </Link>
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
              onClick={openDrawerHandler}
            >
              <Box
                sx={{
                  width: "28px",
                  height: "20px",
                  background: `url(${HamburgerIcon}) `,
                }}
              ></Box>
            </IconButton>
            <NavDrawer closeFunc={closeDrawerHandler} open={openDrawer} />
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
