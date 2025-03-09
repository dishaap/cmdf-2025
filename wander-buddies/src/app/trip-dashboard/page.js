"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Box, Typography } from "@mui/material";
import { BaseCard } from "../components/TripCard";
import { NavigationBar } from "../components/NavigationBar";

export default function TripDashboard() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userID"); // Extract userID from URL
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('User ID:', userId); // Check the userId
    if (!userId) return;
  
    fetch(`/api/trip-dashboard?userID=${userId}`)
      .then(res => res.json())
      .then(data => {
        if (data.trips) setTrips(data.trips);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching trips:", err);
        setLoading(false);
      });
  }, [userId]);

  if (!userId) {
    return <Typography variant="h5">No user selected.</Typography>;
  }

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (trips.length === 0) {
    return <Typography>No trips found.</Typography>;
  }

  console.log(trips);

  return (
    <>
      <Box>
        <Typography sx={{ color: "text.primary", fontSize: 44, marginBottom: 6 }}>
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
        {trips.map((trip, index) => {
          return (
            <BaseCard
              key={index} // Add a key prop for each BaseCard
              tripName={trip.tripname} // Dynamically use trip name
            />
          );
        })}
      </Box>
    </>
  );
};