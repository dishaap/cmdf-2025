"use client";

import * as React from 'react';
import { Badge, Avatar, Stack } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export const AvatarBadge = ({status}) => {
    const statusConfig = {
        "attending": { icon: <Avatar sx={{bgcolor: "green"}}> <CheckIcon /> </Avatar> },
        "maybe": { icon: <Avatar sx={{ bgcolor: "orange" }}> <QuestionMarkIcon /> </Avatar> },
        "noAttendance": { icon: <Avatar sx={{bgcolor: "red"}}><DoNotDisturbIcon /></Avatar> },
    };

    const { color, icon } = statusConfig[status];

    return (
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={icon}
        >
            <Avatar alt="Women One" src="/images/avatar/women1.jpg" sx={{height: 80, width: 80}}/>
        </Badge>
    );
}