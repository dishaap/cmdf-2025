import { Typography, Box, Avatar } from "@mui/material";
import React from "react";
import { ActivityCard } from "../components/ActivityCard";
import { Card, CardMedia, CardContent } from "@mui/material";
import { AvatarBadge } from "../components/AvatarBadge";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { EditButton } from "../components/EditButton";

const ActivityNameHeader = () => {
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
            <FastfoodIcon sx={{height: 100, width: 100, color:"white"}} />
        </Box>
  
        <CardContent sx={{display: 'flex', flexDirection: 'column', textAlign: "left" }}>
          <Typography sx={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>
            Activity Name
          </Typography>
            <Typography sx={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
              Location
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
          <Typography sx={{ color: 'black', fontSize: 30 }}>Jan</Typography>
          <Typography sx={{ color: 'black', fontSize: 30 }}>8</Typography>
        </Box>
      </Card>
    );
  };

const Activity = () => {

    return(
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <ActivityNameHeader />
            <Box sx={{display: "grid", gridTemplateColumns: "2fr 1fr", gap: 5, width: "100%", marginTop: 10}}>
            <Box sx={{display: "flex", flexDirection: "column", textAlign: "left", gap: 10}}>
                <Box>
                <Box sx={{display: "flex", gap: 5, justifyContent: "space-between"}}>
                  <Typography sx={{ color: 'text.primary', fontSize: 32, alignItems: "flex-start"}}>Activity Description</Typography>
                  <EditButton />
              </Box>
                    <Typography sx={{ color: 'text.primary', fontSize: 22, alignItems: "flex-start", textAlign: "left"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, 
                        bibendum sit amet justo non, dictum vulputate libero. 
                        Morbi et malesuada ipsum, efficitur venenatis tortor. Aliquam erat volutpat. 
                        Mauris blandit lectus lacinia metus accumsan, non consequat massa gravida. 
                        In a sollicitudin justo. 
                    </Typography>

                </Box>
                
                <Box>
                <Typography sx={{ color: 'text.primary', fontSize: 32, alignItems: "flex-start"}}>Activity Description</Typography>

                    <Typography sx={{ color: 'text.primary', fontSize: 26, alignItems: "flex-start", textAlign: "left"}}>
                        Created by:
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontSize: 26, alignItems: "flex-start", textAlign: "left"}}>
                        Budget: 
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontSize: 26, alignItems: "flex-start", textAlign: "left"}}>
                        People Interested:
                    </Typography>

                    <Box sx={{display: "flex", gap: 5}}>
                      <AvatarBadge status={"attending"} />
                      <AvatarBadge status={"noAttendance"} />
                      <AvatarBadge status={"maybe"} />
                    </Box>
                </Box>
            </Box>
            
            <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
                <Typography sx={{ color: 'text.primary', fontSize: 30, alignItems: "flex-start"}}>Other Activities</Typography>

                <ActivityCard sizeLarge={false} />
                <ActivityCard sizeLarge={false}/>
                <ActivityCard sizeLarge={false}/>
                <ActivityCard sizeLarge={false}/>

            </Box>
   
            

        </Box>

            
        </Box>
        
    );

}

export async function getServerSideProps() {
  const response = await fetch('${process.env.NEXT_PUBLIC_BASE_URL || }api/activities'); // Adjust API URL if needed
  const data = await response.json();
  
  return {
    props: {
      activities: data.activities || [], // Pass the fetched activities as props
    },
  };
}

export default Activity;