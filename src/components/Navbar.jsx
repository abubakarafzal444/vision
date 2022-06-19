import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import HamburgerIcon from "assets/Hamburger1.svg";
import NavDrawer from "components/NavDrawer";
import { Link } from "react-scroll";

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
              display: { xs: "none", md: "flex" },
              marginRight: "9.5%",
              width: "401px",
              justifyContent: "space-between",
              marginTop: "51px",
            }}
          >
            <Link activeClass="active" offset={-100} smooth spy to="feature-section">
              <Box
                component="p"
                sx={{
                  font: "normal normal bold 19px/19px Montserrat,sans-serif",
                  borderBottom: "3px solid #A29BFF",
                  paddingBottom: "7px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#A29BFF",
                  },
                }}
              >
                Features
              </Box>
            </Link>
            <Link activeClass="active" offset={-50} smooth spy to="how-it-works-section">
              <Box
                component="p"
                sx={{
                  font: "normal normal bold 19px/19px Montserrat,sans-serif",
                  borderBottom: "3px solid #A29BFF",
                  paddingBottom: "7px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#A29BFF",
                  },
                }}
              >
                How does it work
              </Box>
            </Link>
            <Link activeClass="active" smooth spy to="join-us-section">
              <Box
                component="p"
                sx={{
                  font: "normal normal bold 19px/19px Montserrat,sans-serif",
                  borderBottom: "3px solid #A29BFF",
                  paddingBottom: "7px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#A29BFF",
                  },
                }}
              >
                Join us
              </Box>
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
