"use client";

import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, TextField, Button } from "@mui/material";

const AuthTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Box sx={{ width: 400, mx: "auto", mt: 5, p: 3, boxShadow: 3, borderRadius: 10, backgroundColor: "#82b9d9" }}>
      {/* Tabs */}
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        centered
        sx={{
          "& .MuiTab-root": {
            borderRadius: 10,
            fontFamily: "var(--font-poppins)",
            fontWeight: 300,
          },
          "& .MuiTab-root.Mui-selected": {
            backgroundColor: "#098EAC", // Background color of selected tab
            color: "white", // Text color of selected tab
          },
          "& .MuiTabs-indicator": {
            display: "none", // Remove the default indicator
          },
        }}
      >
        <Tab label="Sign In" sx={{ color: tabIndex === 0 ? "#098EAC" : "white" }} />
        <Tab label="Log In" sx={{ color: tabIndex === 1 ? "#098EAC" : "white" }} />
      </Tabs>

      {/* Sign In Panel */}
      {tabIndex === 0 && (
        <Box sx={{ p: 3 }}>
          <TextField fullWidth label="Name" margin="normal" sx={{ backgroundColor: "#fff", borderRadius: 1 }} />
          <TextField fullWidth label="Email" margin="normal" sx={{ backgroundColor: "#fff", borderRadius: 1 }} />
          <TextField fullWidth label="Password" type="password" margin="normal" sx={{ backgroundColor: "#fff", borderRadius: 1 }} />
          <TextField fullWidth label="Confirm Password" type="password" margin="normal" sx={{ backgroundColor: "#fff", borderRadius: 1 }} />
          {/* Upload Picture Button */}
          <Button variant="outlined" component="label" sx={{ mt: 2, display: "block", color: "#000", backgroundColor: "#fff"}}>
            Upload Profile Picture
            <input type="file" hidden />
          </Button>

          <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: "#098EAC", "&:hover": { backgroundColor: "#8DD4D5" } }}>
            Sign Up
          </Button>
        </Box>
      )}

      {/* Log In Panel */}
      {tabIndex === 1 && (
        <Box sx={{ p: 3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <TextField fullWidth label="Email" margin="normal" sx={{ backgroundColor: "#fff", borderRadius: 1 }} />
          <TextField fullWidth label="Password" type="password" margin="normal" sx={{ backgroundColor: "#fff", borderRadius: 1 }} />
          <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: "#098EAC", "&:hover": { backgroundColor: "#8DD4D5" } }}>
            Log In
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AuthTabs;
