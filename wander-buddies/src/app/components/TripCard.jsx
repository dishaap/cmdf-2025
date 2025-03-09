import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { CardMedia, Typography } from '@mui/material';
import { StyledAvatar } from './StyledAvatar';

const people = ["Alyssa", "Jamie", "Jennifer", "Sally"];

// used for each trip 
export const BaseCard = ({tripName}) => {
    return(
    <Card variant="outlined" sx={{borderRadius: "10px"}}>
        <CardMedia
            sx={{ height: 140, width: 300}}
            image="/public/images/tropical.jpg"
            title="tropical"
        />

        <CardContent sx={{textAlign: "left"}}>
            {/* <Box sx = {{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Typography gutterBottom sx={{ color: 'primary.secondary', fontSize: 14 }}>
                    Budget
                </Typography>
            </Box> */}
            
            <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 20 }}>
                 {tripName}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                 Dates
            </Typography>

            <Box sx={{display: "flex", flexDirection: "row", gap: 2}}>
                {
                    people.map((person) => {
                        return <StyledAvatar key={person} name={person} />;

                    })
                }
            </Box>
            
            
      </CardContent>
    </Card>
        
    );
}

