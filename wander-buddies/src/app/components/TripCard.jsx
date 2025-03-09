import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { CardMedia, Typography } from '@mui/material';
import { StyledAvatar } from './StyledAvatar';

const people = ["Alyssa", "Jamie", "Jennifer", "Sally"];

// used for each trip 
export const TripCard = ({tripName}) => {
    return(
    <Card variant="outlined" sx={{borderRadius: "20px"}}>
        <CardMedia
            sx={{ height: "200px", width: "100%"}}
            image="/images/tripImages/seychelles.jpg"
            title="tropical"
        />

        <CardContent sx={{textAlign: "left"}}>
            
            <Typography sx={{ color: 'text.primary', fontSize: 20 }}>
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

