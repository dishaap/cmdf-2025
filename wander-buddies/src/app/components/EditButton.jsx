import React from "react";
import { Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const EditButton = () => {
    return(
        <Button
            variant="conatined"
            sx={{backgroundColor: "#098EAC", display: "flex", flexDirection:"row", borderRadius: "20px", gap: 1}}
        >
            <EditIcon />
            <Typography sx={{ color: 'white', fontSize: 15 }}>Edit Activity</Typography>

        </Button>

    );
}