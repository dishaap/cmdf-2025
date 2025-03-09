"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import AuthTabs from "./components/AuthTabs";
import CreateActivityModal from './components/CreateActivityModal';
import EditActivityModal from './components/EditActivityModal';

const Header = () => {
  return (
    <Box sx={{
      display: "flex", alignItems: "center", gap: "2vw",
      width: "100%", backgroundColor: "#098EAC", padding: "1vw 2vw"
    }}>
      <Image
        src="/images/logo-white.svg"
        alt="Logo"
        width={50}
        height={50}
      />
      <Typography sx={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: "2.3rem", color: "white" }}>
        Wander Buddies
      </Typography>
    </Box>

  );
};

const Footer = () => {
  return (
    <Box sx={{
      display: "flex", flexDirection: "column", alignItems: "start", gap: "1vh",
      width: "100%", backgroundColor: "#098EAC", padding: "1vw 2vw"
    }}>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", gap: "2vw" }}>
        <Typography sx={{ fontFamily: "var(--font-quicksand)", fontWeight: 500, fontSize: "1rem", color: "white" }}>
          About Wander Buddies
        </Typography>
        <Typography sx={{ fontFamily: "var(--font-quicksand)", fontWeight: 500, fontSize: "1rem", color: "white" }}>
          Contact Us
        </Typography>
        <Typography sx={{ fontFamily: "var(--font-quicksand)", fontWeight: 500, fontSize: "1rem", color: "white" }}>
          Terms and Conditions
        </Typography>
      </Box>
      <hr style={{ border: "0.5px solid white", width: "97.5%" }} />
      <Typography sx={{ fontFamily: "var(--font-poppins)", fontWeight: 500, fontSize: "0.8rem", color: "white", paddingLeft: "1vw" }}>
        © Wander Buddies 2025
      </Typography>
    </Box>

  );
};


const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{
      display: "flex", flexDirection: "column", backgroundImage: 'url("/images/wanderbuddiesbg.svg")',
      backgroundSize: "fill"
    }}>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%", height: "665px", alignItems: "center", padding: "1vw" }}>
        <Box sx={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: "1vw", justifyContent: "center",
          paddingLeft: "2.5vw", paddingRight: "3vw", marginLeft: "2vw"
        }}>
          <Typography sx={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: "2.3rem", color: "black" }}>
            Welcome!
          </Typography>
          <Typography sx={{
            fontFamily: "var(--font-poppins)", fontWeight: 300, fontSize: "1.5rem", color: "black",
            fontStyle: "italic"
          }}>
            Explore more, plan together, and make
            <br />
            every journey unforgettable —
            <br />
            track your budget, vote on activities,
            <br />
            and travel with ease.
            <br />
            Adventure starts here!
          </Typography>
          
          {/* TO REMOVE - ONLY TEST */}
          <Button variant="contained" onClick={handleOpenModal}>
            Create Activity
          </Button>
          <CreateActivityModal open={modalOpen} onClose={handleCloseModal} />
          <Button variant="contained" onClick={handleOpenModal}>
            Edit Activity
          </Button>
          <EditActivityModal open={modalOpen} onClose={handleCloseModal} />

        </Box>
        <AuthTabs />
      </Box>
      <Footer />
    </Box>
  );

}

export default Home;