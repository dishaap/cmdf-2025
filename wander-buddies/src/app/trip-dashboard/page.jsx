import React from "react";
import { Box, Typography } from "@mui/material";
import { BaseCard } from "../components/TripCard";
import { NavigationBar } from "../components/NavigationBar";

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
      {" "}
      <Box>
        <Typography
          sx={{ color: "text.primary", fontSize: 44, marginBottom: 6 }}
        >
          My Trips
        </Typography>
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
          return <BaseCard tripName={tripName} />;
        })}
      </Box>
    </>
  );
};

export default TripDashboard;