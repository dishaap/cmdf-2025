import React from "react";
import { Box, Typography } from "@mui/material";
import { TripCard } from "../components/TripCard";
import { NavigationBar } from "../components/NavigationBar";
import { AddButton } from "../components/AddButton";

const tripNames = [
  "Tropical Getaway",
  "Mountain Adventure",
  "City Escape",
  "Road Trip USA",
  "European Vacation",
  "Beachside Bliss",
  "Safari Expedition",
  "Island Hopping",
  "Winter Wonderland",
  "Cultural Journey",
];

export const TripDashboard = () => {
  return (
    <>
      <NavigationBar />
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 6}}>
        <Box sx={{display: "flex", flexDirection: "row", gap: 4}}>
          <Box component="img" src="/images/icons/wander-buddies.png" alt="Logo" />
          <Typography
            sx={{ color: "text.primary", fontSize: 44, }}
          >
            My Trips
          </Typography>

        </Box>
        
        <AddButton />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 10,
          alignContent: "flex-start",
        }}
      >
        {tripNames.map((tripName) => {
          return <TripCard key={tripName} tripName={tripName} />;
        })}
      </Box>
    </>
  );
};

export default TripDashboard;