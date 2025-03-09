"use client";

import React, { useState } from "react";
import { Box, Tabs, Tab, TextField, Button } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, storage } from "@/lib/firebase";

const AuthTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  const handleChange = (event, newIndex) => setTabIndex(newIndex);

  // Function to handle sign-up
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Upload profile picture (if exists)
      let profilePicURL = "";
      if (profilePic) {
        const profilePicRef = ref(storage, `profile_pics/${user.uid}`);
        await uploadBytes(profilePicRef, profilePic);
        profilePicURL = await getDownloadURL(profilePicRef);
      }

      // Store user in PostgreSQL via API
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, profilePicURL }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("User signed up successfully!");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert(error.message);
    }
    setLoading(false);
  };

  // Function to handle log-in
  const handleLogIn = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user data from API
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Logged in user:", data.user);
        alert("Logged in successfully!");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <Box sx={{ width: 400, mx: "auto", mt: 5, p: 3, boxShadow: 3, borderRadius: 10, backgroundColor: "#82b9d9" }}>
      {/* Tabs */}
      <Tabs value={tabIndex} onChange={handleChange} centered>
        <Tab label="Sign Up" />
        <Tab label="Log In" />
      </Tabs>

      {/* Sign Up Form */}
      {tabIndex === 0 && (
        <Box sx={{ p: 3 }}>
          <TextField fullWidth label="Name" margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
          <TextField fullWidth label="Confirm Password" type="password" margin="normal" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <Button variant="outlined" component="label" sx={{ mt: 2, display: "block" }}>
            Upload Profile Picture
            <input type="file" hidden onChange={(e) => setProfilePic(e.target.files[0])} />
          </Button>
          <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSignUp} disabled={loading}>
            Sign Up
          </Button>
        </Box>
      )}

      {/* Log In Form */}
      {tabIndex === 1 && (
        <Box sx={{ p: 3 }}>
          <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleLogIn} disabled={loading}>
            Log In
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AuthTabs;