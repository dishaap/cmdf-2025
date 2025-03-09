import { Typography, Box, Avatar } from "@mui/material";
import React from "react";
import { ActivityCard } from "../components/ActivityCard";
import { Card, CardMedia, CardContent } from "@mui/material";

const Header = ({text}) => {
    return(
        <Typography sx={{ color: 'text.primary', fontSize: 32, alignItems: "flex-start"}}>{text}</Typography>


    );
}

const ActivityNameHeader = () => {
    return (
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '20px',
          width: '100%',
          background: '#A1B866',
          overflow: 'hidden',
          boxShadow: 2,
        }}
      >
        {/* Left Section: Icon */}
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <CardMedia
            sx={{ height: 70, width: 70, justifyContent: "center"}}
            image="/public/images/icons/icons.svg"
            title="person one"
            />
        </Box>
  
        {/* Middle Section: Activity Name and Location */}
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography sx={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
            Activity Name
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
              Location
            </Typography>
          </Box>
        </CardContent>
  
        {/* Right Section: Date */}
        <Box
          sx={{
            background: 'white',
            padding: '15px',
            minWidth: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
            boxShadow: 1,
          }}
        >
          <Typography sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Jan</Typography>
          <Typography sx={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>8</Typography>
        </Box>
      </Card>
    );
  };

const Activity = () => {
    return(
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <ActivityNameHeader />
            <Box sx={{display: "grid", gridTemplateColumns: "2fr 1fr", gap: 5, width: "100%"}}>
            <Box sx={{display: "flex", flexDirection: "column", textAlign: "left", gap: 10}}>
                <Box>
                    <Header text={"Activity Description"} />
                    <Typography sx={{ color: 'text.primary', fontSize: 22, alignItems: "flex-start", textAlign: "left"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, 
                        bibendum sit amet justo non, dictum vulputate libero. 
                        Morbi et malesuada ipsum, efficitur venenatis tortor. Aliquam erat volutpat. 
                        Mauris blandit lectus lacinia metus accumsan, non consequat massa gravida. 
                        In a sollicitudin justo. 
                    </Typography>

                </Box>
                
                <Box>
                <Header text={"Activity Details"} />
                    <Typography sx={{ color: 'text.primary', fontSize: 26, alignItems: "flex-start", textAlign: "left"}}>
                        Created by:
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontSize: 26, alignItems: "flex-start", textAlign: "left"}}>
                        Budget: 
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontSize: 26, alignItems: "flex-start", textAlign: "left"}}>
                        People Interested:
                    </Typography>

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

export default Activity;