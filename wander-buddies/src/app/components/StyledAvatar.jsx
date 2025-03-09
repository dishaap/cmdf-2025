import { Avatar, Typography } from "@mui/material";
import Box from '@mui/material/Box';

export const StyledAvatar = ({name, displayName = true}) => {
    return(
        <Box sx={{display: "flex", flexDirection:"column", alignItems: "center", textAlign: "center"}}>
             <Avatar alt="Women 1" src="/images/avatar/women1.jpg"/>
            { displayName ?
                <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>
                    {name}
                </Typography> : <></>}
        </Box>
    );
}