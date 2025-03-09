"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Poppins } from "next/font/google"; // Import Poppins font

// Load Poppins font from Google Fonts
const poppins = Poppins({
  weight: ['400', '700'],  // Use Regular and Bold weights
  subsets: ['latin'],
});


const Header = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "2vw",
      width: "100%", backgroundColor: "#098EAC", padding: "1vw 2vw" }}>
      {/* Logo Image */}
      <Image 
        src="/images/logo-white.svg" 
        alt="Logo"
        width={50} 
        height={50} 
      />

      {/* Title */}
      <Typography sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 600, fontSize: "2.3rem", color: "white" }}>
        Wander Buddies
      </Typography>
    </Box>

  );
};

const Footer = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "2vw",
      width: "100%", backgroundColor: "#098EAC", padding: "10px 20px" }}>
      {/* Title */}
      <Typography sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 500, fontSize: "1.5rem", color: "white" }}>
        Wander Buddies
      </Typography>
    </Box>

  );
};


const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <br />
      <Footer />
    </Box>
  );

}

export default Home;