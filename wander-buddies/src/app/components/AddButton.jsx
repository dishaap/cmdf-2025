import React from "react";
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddButton = () => {
    return(
        <Button
            variant="conatined"
            sx={{backgroundColor: "#098EAC", display: "flex", flexDirection:"row", borderRadius: "25px", gap: 1}}
        >
            <AddIcon />
            <Typography sx={{ color: 'white', fontSize: 15 }}>Add Trip</Typography>

        </Button>

    );
}