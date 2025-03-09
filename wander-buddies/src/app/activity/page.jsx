"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Typography, Box, Avatar } from "@mui/material";
import React from "react";
import { ActivityCard } from "../components/ActivityCard";
import { Card, CardMedia, CardContent } from "@mui/material";
import { AvatarBadge } from "../components/AvatarBadge";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { EditButton } from "../components/EditButton";

/* async function fetchActivities() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/activities`, { cache: "no-store" });

    if (!res.ok) {
        console.error("Failed to fetch activities");
        return [];
    }

    const data = await res.json();
    console.log("Fetched Activities:", data); // Debugging line

    return Array.isArray(data.activities) ? data.activities : [];
} */

const ActivityNameHeader = ({ activityName, location, startDate }) => {
  return (
    <Card
      sx={{
        display: 'grid',
        gridTemplateColumns: "1fr 5fr 1fr",
        alignItems: 'center',
        borderRadius: '20px',
        width: '100%',
        background: '#A1B866',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <FastfoodIcon sx={{ height: 100, width: 100, color: "white" }} />
      </Box>

      <CardContent sx={{ display: 'flex', flexDirection: 'column', textAlign: "left" }}>
        <Typography sx={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>
          {activityName}
        </Typography>
        <Typography sx={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
          {location}
        </Typography>
      </CardContent>

      <Box
        sx={{
          background: 'white',
          height: "100%",
          width: "100%",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: "20px",
        }}
      >
        <Typography sx={{ color: 'black', fontSize: 30 }}>
          {startDate.toLocaleString('default', { month: 'short' })}
        </Typography>
        <Typography sx={{ color: 'black', fontSize: 30 }}>
          {startDate.getDate()}
        </Typography>
      </Box>
    </Card>
  );
};

export default function Activity() {
  const searchParams = useSearchParams();
  const activityId = searchParams.get("activityId"); // Extract activityId from URL
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!activityId) return;

    fetch(`/api/activity?activityId=${activityId}`)
      .then(res => res.json())
      .then(data => {
        if (data.activity) setActivity(data.activity);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching activity:", err);
        setLoading(false);
      });
  }, [activityId]);

  if (!activityId) {
    return <Typography variant="h5">No activity selected.</Typography>;
  }

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!activity) {
    return <Typography>No activity found.</Typography>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box key={activity.activityid} sx={{ marginBottom: 4 }}>
        <ActivityNameHeader
          activityName={activity.activityname}
          location={activity.activityloc}
          startDate={new Date(activity.startdate)}
        />
        <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 5, width: "100%", marginTop: 10 }}>
          <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left", gap: 10 }}>
            <Box>
              <Box sx={{ display: "flex", gap: 5, justifyContent: "space-between" }}>
                <Typography sx={{ color: 'text.primary', fontSize: 32, alignItems: "flex-start" }}>Activity Description</Typography>
                <EditButton />
              </Box>
              <Typography sx={{ color: 'text.primary', fontSize: 22, alignItems: "flex-start", textAlign: "left" }}>
                {activity.description}
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ color: 'text.primary', fontSize: 32, alignItems: "flex-start" }}>
                Activity Details
              </Typography>
              <Typography sx={{ color: 'text.primary', fontSize: 26, alignItems: "flex-start", textAlign: "left" }}>
                Created by: {activity.tripplanner}
              </Typography>
              <Typography sx={{ color: 'text.primary', fontSize: 26, alignItems: "flex-start", textAlign: "left" }}>
                Budget: {activity.budget}
              </Typography>
              <Typography sx={{ color: 'text.primary', fontSize: 26, alignItems: "flex-start", textAlign: "left" }}>
                People Interested:
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 3 }}>
              {activity.rsvps.map((rsvp, index) => (
                <AvatarBadge key={index} status={
                  rsvp.status === 1 ? "noAttendance" :
                    rsvp.status === 2 ? "maybe" :
                      "attending"
                }>
                  {rsvp.username}
                </AvatarBadge>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography sx={{ color: 'text.primary', fontSize: 30, alignItems: "flex-start" }}>Other Activities</Typography>
            // TODO: Make this dynamic.
          <ActivityCard sizeLarge={false} />
          <ActivityCard sizeLarge={false} />
          <ActivityCard sizeLarge={false} />
          <ActivityCard sizeLarge={false} />
        </Box>
      </Box>
    </Box>

  );
}