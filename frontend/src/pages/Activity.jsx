import { Typography, Box, Avatar } from "@mui/material";
import React from "react";
import { ActivityCard } from "../components/ActivityCard";

const Header = ({text}) => {
    return(
        <Typography sx={{ color: 'text.primary', fontSize: 32, alignItems: "flex-start"}}>{text}</Typography>


    );
}


export const Trip = () => {
    return(
        <Box sx={{display: "grid", gridTemplateColumns: "2fr 1fr", gap: 5}}>
            <Box sx={{display: "flex", flexDirection: "column", textAlign: "left"}}>
                <Header text={"Activity Description"} />
                <Typography sx={{ color: 'text.primary', fontSize: 22, alignItems: "flex-start", textAlign: "left"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, 
                    bibendum sit amet justo non, dictum vulputate libero. 
                    Morbi et malesuada ipsum, efficitur venenatis tortor. Aliquam erat volutpat. 
                    Mauris blandit lectus lacinia metus accumsan, non consequat massa gravida. 
                    In a sollicitudin justo. 
                </Typography>
                <Header text={"Activity Details"} />
                <Typography sx={{ color: 'text.primary', fontSize: 22, alignItems: "flex-start", textAlign: "left"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, 
                    bibendum sit amet justo non, dictum vulputate libero. 
                    Morbi et malesuada ipsum, efficitur venenatis tortor. Aliquam erat volutpat. 
                    Mauris blandit lectus lacinia metus accumsan, non consequat massa gravida. 
                    In a sollicitudin justo. 
                </Typography>

            </Box>
            
            <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
                <Typography sx={{ color: 'text.primary', fontSize: 30, alignItems: "flex-start"}}>Other Activities</Typography>

                <ActivityCard sizeLarge={false} />
                <ActivityCard sizeLarge={false}/>
                <ActivityCard sizeLarge={false}/>
                <ActivityCard sizeLarge={false}/>

            </Box>
   
            

        </Box>
    );

}