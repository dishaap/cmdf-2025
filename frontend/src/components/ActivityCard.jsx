import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { CardMedia, Typography, CardActions } from '@mui/material';
import { StyledAvatar } from './StyledAvatar';

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
                     <CardMedia
                        sx={{ height: 50, width: 50, justifyContent: "center"}}
                        image="/public/images/icons/arrow.svg"
                        title="person one"
                    />


             </CardActions>
      </CardContent>
    </Card> : 
    <Card variant="outlined" sx={{borderRadius: "10px", width: "100%", background:"#64A181"}}>
        <CardContent sx={{display: "grid", gridTemplateColumns: "0.5fr 2fr 1fr", textAlign: "left", alignItems: "center"}}>
                <Box sx={{display:"flex", justifyContent: "center", textAlign: "center" }}>
                    <Typography sx={{ color: 'text.primary', fontSize: 20 }}>
                        Jan 8
                    </Typography>

                </Box>                
            <Box sx={{display:"flex", flexDirection: "column", marginLeft: 3, justifyContent: "center"}}>
                <Typography sx={{ color: 'text.primary', fontSize: 20}}>
                    Acitivy Name
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Location
                </Typography>

            </Box>
            <CardActions sx={{display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}}>
                     <CardMedia
                        sx={{ height: 20, width: 20, justifyContent: "center"}}
                        image="/public/images/icons/arrow.svg"
                        title="person one"
                    />
             </CardActions>
      </CardContent>
    </Card>
        }
    </Box>


    );
}