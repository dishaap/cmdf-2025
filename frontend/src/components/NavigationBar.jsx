import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import { Typography, Box } from '@mui/material';
import { StyledAvatar } from './StyledAvatar';

export const NavigationBar = () => {
    return(
        <AppBar 
            position='fixed' 
            sx={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            width: 100, 
            height: "100vh",
            gap: 10,
            left: 0,}}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: 6, marginTop: 10}}>
                <StyledAvatar displayName={false} />
                <HomeIcon />
                <PeopleIcon />
                <SettingsIcon />
            </Box>
        
        </AppBar>
    );
}