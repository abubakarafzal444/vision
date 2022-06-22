import { Box } from "@mui/system";
import React from "react";
import stripeImg from "assets/AbstractstripesJoinUs.svg";
import Discord from "assets/Discord.svg";
import Twitter from "assets/Twitter.svg";

const JoinUsSection = () => {
  return (
    <Box id="join-us-section" component="section" sx={{  
    //  backgroundImage: `url(${stripeImg})`,
    // backgroundPosition: { xs: "center" },
    // backgroundSize: { xs: "cover" },
    marginTop: { xs: "0", sm: "unset" },}}>
    <Box sx={{ maxWidth: "1920px", marginX: "auto" }}>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: { sm: "180px", xs: "0px" },
        background: {sm:`transparent url(${stripeImg}) no-repeat right 50% top -20px`,}
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box className="circle-parent"></Box>
        <Box className="circle-child"></Box>
        <Box
          component="h3"
          sx={{
            position: "relative",
            left: { md: "unset", xs: "40px" },
            fontSize: {
              sm: "45px",
              xs: "30px",
            },
            fontWeight: "600",
            color: "#A29BFF",
            zIndex: "10",
            width: "180px",
          }}
        >
          Join us!
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          fontSize: {
            sm: "26px",
            xs: "20px",
          },
          fontWeight: "400",
          marginTop: { sm: "32px", xs: "37px" },
        }}
      >
        <Box
          cpmponent="p"
          sx={{
            color: "#E4E6FD",
            textDecoration: "underline",
            zIndex: "15",
            position: "relative",
            display: "flex",
            cursor: "pointer",
            marginRight: { sm: "65px" },
            alignItems: "center",


            "& .animated-link-btn": {
              minWidth: { sm: "180px" },
              background: {
                sm: "linear-gradient(to left, transparent 50%, #A29BFF 50%) right",
              },
              backgroundSize: { sm: "200%" },
              transition: { sm: ".3s ease-in" },
              height:"100%",
            },
            "&:hover": {
              "& .animated-link-btn": {
                backgroundPosition: "left",
                color: { sm: "#020311" },
                fontWeight: { sm: "bold" },
              },
            },
          }}
        >
          <Box
            component="img"
            src={Discord}
            sx={{
              width: "32px",
              height: "37px",
              color: "#A29BFF",
              marginRight: "5px",
              
            "& .animated-link-btn": {
              minWidth: { sm: "180px" },
              background: {
                sm: "linear-gradient(to left, transparent 50%, #A29BFF 50%) right",
              },
              backgroundSize: { sm: "200%" },
              transition: { sm: ".3s ease-in" },
            
           
            },
            "&:hover": {
              "& .animated-link-btn": {
                backgroundPosition: "left",
                color: { sm: "#020311" },
                fontWeight: { sm: "bold" },
                
              },
            },
            }}
          ></Box>
          <Box
          sx={{  paddingBottom:"6px"}}
          className="animated-link-btn"
            component="span"
          >
            project_name
          </Box>
        </Box>
        <Box
          cpmponent="p"
          sx={{
            color: "#E4E6FD",
            textDecoration: "underline",
            zIndex: "15",
            position: "relative",
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
            "& .animated-link-btn": {
              minWidth: { sm: "180px" },
              background: {
                sm: "linear-gradient(to left, transparent 50%, #A29BFF 50%) right",
              },
              backgroundSize: { sm: "200%" },
              transition: { sm: ".3s ease-in" },
              height:"100%",
              paddingBottom:"6px"
            },
            "&:hover": {
              "& .animated-link-btn": {
                backgroundPosition: "left",
                color: { sm: "#020311" },
                fontWeight: { sm: "bold" },
              },
            },
          }}
        >
          <Box
          component="img"
          src={Twitter}
            sx={{
              width: "32px",
              height: "37px",
              color: "#A29BFF",
              marginRight: "5px",
            }}
          ></Box>
          <Box
            className="animated-link-btn"
            component="span"
          >
            project_name
          </Box>
        </Box>
      </Box>
      <Box sx={{ 
        backgroundImage: {xs:`url(${stripeImg})`,sm:"unset"},height:"160px",width:"100%",backgroundSize:"1100px 470px",backgroundPosition:"right 38% top -129px",display:{sm:"none"}}}></Box>
      <Box
        sx={{
          marginTop: { sm: "250px", xs: "0px" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="p"
          sx={{
            fontSize: "16px",
            color:"#737691",
            marginBottom: { sm: "50px", xs: "21px" },
            textAlign: "center",
            width: { sm: "unset", xs: "70%" },
          }}
        >
          Copyright 2022 Project_name. all rights reserved
        </Box>
      </Box>
    </Box>
    </Box>
    </Box>

  );
};

export default JoinUsSection;
