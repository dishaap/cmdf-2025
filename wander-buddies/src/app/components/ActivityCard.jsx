import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { CardMedia, Typography, CardActions } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ActivityCard = ({sizeLarge = true}) => {
    return(
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        {
            sizeLarge ? 
            <Card variant="outlined" sx={{borderRadius: "15px", width: "100%", background:"#64A181"}}>
                <CardContent sx={{display: "grid", gridTemplateColumns: "1fr 1fr 2fr 1fr", textAlign: "left", alignItems: "center"}}>
                    <Box sx={{display:"flex", justifyContent: "center" }}>
                        <Typography sx={{ color: 'text.primary', fontSize: 30 }}>
                            Jan 8
                        </Typography>

                    </Box>
           
                    <Box sx={{display:"flex", justifyContent: "center" }}>
                        <CardMedia
                            sx={{ height: 70, width: 70, justifyContent: "center"}}
                            image="/public/images/icons/icons.svg"
                            title="person one"
                        />
                    </Box> 
            <Box>
                <Typography sx={{ color: 'text.primary', fontSize: 20}}>
                    Acitivy Name
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Location
                </Typography>
                <Box sx={{display: "flex", gap: 2, alignItems: "center"}}>
                    <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Created By: Jane
                    </Typography>
                    
            </Box>

            </Box>
            <CardActions sx={{display: "flex", justifyContent: "center"}}>
                     <ArrowForwardIosIcon />
             </CardActions>

      </CardContent>
    </Card> : 
    <Card variant="outlined" sx={{borderRadius: "20px", width: "100%", height: "130px", background:"#64A181", display: "grid", gridTemplateColumns: "1fr 2fr 1.5fr", textAlign: "left", alignItems: "center"}}>
                <Box sx={{
                        background: 'white',
                        height: "100%",
                        width: "100%",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: "10px",
                    }}>
                    <Typography sx={{ fontSize: 20 }}>
                        Jan 
                    </Typography>
                    <Typography sx={{ fontSize: 20 }}>
                        8
                    </Typography>


                </Box>                
                <CardContent sx={{display: 'flex', flexDirection: 'column', textAlign: "left" }}>
                    <Typography sx={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                        Activity Name
                    </Typography>
                        <Typography sx={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
                        Location
                        </Typography>
                </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}}>
                <ArrowForwardIosIcon sx={{color: "white"}} />
             </CardActions>
      
    </Card>
        }
    </Box>


    );
}