"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { NavigationBar } from "../../components/NavigationBar";
import { Card, CardMedia, CardContent, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import './trip.css';
import { ActivityCard } from "@/app/components/ActivityCard";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const tripName = [
  "Tropical Getaway"
];


const BackButton = () => {
  return (
    <Typography className="backButton" sx={{ alignItems: "start", textDecoration: "underline", paddingBottom: "1rem" }} onClick={() => window.location.href = '/trip-dashboard'}> ← Back to Trips </Typography>

  );
}

const TripName = () => {
  const newDate = new Date("04/16/2024");
  const newDate2 = new Date("05/16/2024");
  const differenceInDays = (newDate2.getTime() - newDate.getTime()) / (1000 * 60 * 60 * 24);
  return (
    <Card sx={{
      display: 'flex',
      borderRadius: '20px',
      width: '100%',
      background: '#82B9D9',
      overflow: 'hidden',
      boxShadow: 2,
      marginBottom: '1rem'
    }}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', margin: "auto" }}>
          {/* Name Header */}
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
            <svg width="38" height="60%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 18.6769C0 8.3619 8.50656 0 18.9999 0C29.4933 0 38 8.3619 38 18.6769C38 25.6806 35.2929 32.058 32.0753 37.178C28.852 42.3071 25.0411 46.2944 22.6504 48.555C20.6164 50.4782 17.4773 50.4819 15.4382 48.5648C13.0366 46.3064 9.2039 42.3194 5.96144 37.189C2.72474 32.0677 0 25.6863 0 18.6769ZM11.3731 18.6734C11.3731 22.8149 14.7885 26.172 19.0015 26.172C23.2146 26.172 26.6299 22.8149 26.6299 18.6734C26.6299 14.532 23.2146 11.1747 19.0015 11.1747C14.7885 11.1747 11.3731 14.532 11.3731 18.6734Z" fill="#323544" />
            </svg>
            <Typography component="div" className="headerText">
              Your Trip to Japan
            </Typography>

          </Box>
          {/* Date  */}
          <Box sx={{ display: 'flex', alignItems: 'start' }}>

            <Typography className="dateText"
              component="div"
              sx={{ color: '#FFF' }}
            >
              {newDate.toLocaleDateString()} - {newDate2.toLocaleDateString()} • {differenceInDays} Days
            </Typography>
          </Box>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "20%" }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNPyod1P-wJDwlErOyxNlS81h1HJb0G7ZgYw&s"
        title="Tokyo"
      />
    </Card>
  );
};



const ActivityItinerary = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '1rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '1rem', gap: 1.5 }} >
        <Typography component="div" className="labelText">
          Activity Itinerary
        </Typography>
        <Button variant="contained" className="addButton" startIcon={<AddIcon />}>Add New Activity</Button>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 1.5,
          alignContent: "flex-start",
          alignSelf: 'start'
        }}
      >
        {/* render activity cards  */}
        <ActivityCard ></ActivityCard>
        <ActivityCard></ActivityCard>
        <ActivityCard></ActivityCard>
        <ActivityCard></ActivityCard>

      </Box>
    </Box>
  );
};

const Budget = () => {
  const used = 60;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', paddingBottom: '1rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', }} >
        <Typography component="div" className="labelText">
          Your Budget
        </Typography>
        {/* total budget */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', paddingBottom: '1rem', marginLeft: "2rem", }} >
          <Typography component="div" className="budgetLabel" >
            Total Budget
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: "1rem", }} >
            <Typography component="div" className="budget" >
              2000$ CAD
            </Typography>
            <Button variant="contained" className="editButton">Edit</Button>
          </Box>
        </Box>
        {/* budget used */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', paddingBottom: '1rem', marginLeft: "2rem", }} >
          <Typography component="div" className="budgetLabel" >
            Money Used
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', gap: "1rem", }} >
            <Typography component="div" className="budget" >
              $1390 of $2000 CAD used
            </Typography>
            {/* progress bar */}
            <Box sx={{ width: '100%', }}>
              <LinearProgress variant="determinate" className="myProgressBar" value={used} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


export const Trip = () => {
  return (
    <>
    <NavigationBar></NavigationBar>
      <BackButton></BackButton>
      <TripName></TripName>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', float: "left", gap: 5 }}>
        <ActivityItinerary></ActivityItinerary>
        <Budget></Budget>
      </Box>


    </>
  );
};

export default Trip;