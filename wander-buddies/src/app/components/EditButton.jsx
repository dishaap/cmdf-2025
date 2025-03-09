"use client"

import React, { useState } from "react";
import { Box, Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EditActivityModal from './EditActivityModal';

export const EditButton = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <Box>
            <Button
                variant="contained"
                onClick={handleOpenModal}
                sx={{ backgroundColor: "#098EAC", display: "flex", flexDirection: "row", borderRadius: "20px", gap: 1 }}
            >
                <EditIcon />
                <Typography sx={{ color: 'white', fontSize: 15 }}>Edit Activity</Typography>

            </Button>
            <EditActivityModal open={modalOpen} onClose={handleCloseModal} />
        </Box>
    );
}